import { createSupabaseClient } from "../../lib/supabase";

export type Recall = {
  id: number;
  recall_id: string;
  brand: string;
  model: string;
  year_start: number | null;
  year_end: number | null;
  affected_count: number | null;
  defect_type: string | null;
  defect_desc: string;
  risk_desc: string;
  consumer_action: string;
  announced_date: string | null;
  source_url: string;
  slug: string;
  collected_at: string;
};

async function db() {
  return createSupabaseClient();
}

export async function getRecentRecalls(limit = 30): Promise<Recall[]> {
  try {
    const s = await db();
    const { data } = await s.from("recalls").select("*").order("announced_date", { ascending: false }).limit(limit);
    return data ?? [];
  } catch { return []; }
}

export async function getRecallBySlug(slug: string): Promise<Recall | null> {
  try {
    const s = await db();
    const { data } = await s.from("recalls").select("*").eq("slug", slug).single();
    return data ?? null;
  } catch { return null; }
}

export async function getRecallsByBrand(brand: string, limit = 50): Promise<Recall[]> {
  try {
    const s = await db();
    const { data } = await s.from("recalls").select("*").ilike("brand", brand).order("announced_date", { ascending: false }).limit(limit);
    return data ?? [];
  } catch { return []; }
}

export async function getAllBrands(): Promise<{ brand: string; count: number }[]> {
  try {
    const s = await db();
    const { data } = await s.from("recalls").select("brand");
    if (!data) return [];
    const counts: Record<string, number> = {};
    for (const r of data) counts[r.brand] = (counts[r.brand] ?? 0) + 1;
    return Object.entries(counts).map(([brand, count]) => ({ brand, count })).sort((a, b) => b.count - a.count);
  } catch { return []; }
}

export async function getRelatedRecalls(brand: string, excludeSlug: string, limit = 5): Promise<Recall[]> {
  try {
    const s = await db();
    const { data } = await s.from("recalls").select("*").ilike("brand", brand).neq("slug", excludeSlug).order("announced_date", { ascending: false }).limit(limit);
    return data ?? [];
  } catch { return []; }
}

export async function getAllRecallSlugs(): Promise<{ slug: string; brand: string; announced_date: string | null }[]> {
  try {
    const s = await db();
    const { data } = await s.from("recalls").select("slug, brand, announced_date");
    return data ?? [];
  } catch { return []; }
}
