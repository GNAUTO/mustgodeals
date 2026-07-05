import Image from "next/image";
import Link from "next/link";
import type { NewsItem, BlogPost } from "../../data/posts";

type Props =
  | { type: "news"; item: NewsItem; compact?: boolean }
  | { type: "blog"; item: BlogPost };

export default function PostCard(props: Props) {
  if (props.type === "news") {
    const { item, compact } = props;
    const imgH = compact ? "140px" : "200px";
    return (
      <Link href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none" }}>
        <div style={{
          background: "white", borderRadius: "12px",
          border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden", height: "100%",
        }}>
          <Image
            src={item.image}
            alt={item.title}
            width={800}
            height={compact ? 140 : 200}
            style={{ width: "100%", height: imgH, objectFit: "cover", display: "block" }}
          />
          <div style={{ padding: compact ? "1rem" : "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{
                fontSize: "10px", color: "#8A9A10", fontWeight: 600,
                letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)",
                padding: "2px 8px", borderRadius: "10px",
              }}>
                {item.category}
              </span>
              <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
            </div>
            <div style={{ fontSize: compact ? "14px" : "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>
              {item.title}
            </div>
            {!compact && (
              <>
                <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.6, marginBottom: "1rem", marginTop: "0.5rem" }}>
                  {item.excerpt}
                </p>
                <span style={{ fontSize: "11px", color: "#aaa" }}>{item.author}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    );
  }

  const { item } = props;
  return (
    <Link href={`/blog/${item.slug}`} className="news-card" style={{ textDecoration: "none" }}>
      <div style={{
        background: "white", borderRadius: "12px",
        border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem",
        height: "100%", cursor: "pointer",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase" }}>
              {item.category}
            </span>
            {item.pinned && (
              <span style={{
                fontSize: "10px", fontWeight: 500, letterSpacing: "0.5px",
                color: "#CCDA47", background: "rgba(204,218,71,0.15)",
                border: "1px solid #CCDA47", padding: "4px 10px", borderRadius: "4px",
              }}>
                FEATURED
              </span>
            )}
          </div>
          <span style={{ fontSize: "10px", color: "#999", background: "#F5F5F0", padding: "2px 8px", borderRadius: "10px" }}>
            {item.lang}
          </span>
        </div>
        <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.6rem" }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.6, marginBottom: "1rem" }}>
          {item.excerpt}
        </p>
        <div style={{ fontSize: "11px", color: "#aaa" }}>{item.readTime} · {item.date}</div>
      </div>
    </Link>
  );
}
