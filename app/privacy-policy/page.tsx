import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | MustGoDeals",
  description: "MustGoDeals privacy policy — how we collect, use, and protect your personal information under the Australian Privacy Act 1988.",
};

const section = {
  marginBottom: "2rem",
} as React.CSSProperties;

const h2 = {
  fontSize: "15px",
  fontWeight: 700,
  color: "#1A1A1A",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  marginBottom: "0.75rem",
} as React.CSSProperties;

const p = {
  fontSize: "15px",
  color: "#444",
  lineHeight: 1.8,
  marginBottom: "0.75rem",
} as React.CSSProperties;

const li = {
  fontSize: "15px",
  color: "#444",
  lineHeight: 1.8,
  marginBottom: "0.3rem",
} as React.CSSProperties;

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Navbar />

      {/* Page header */}
      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>LEGAL</div>
          <h1 style={{ color: "#1A1A1A", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.5rem" }}>Privacy Policy</h1>
          <p style={{ color: "#6B6B6B", fontSize: "13px", margin: 0 }}>Last updated: June 2026</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)" }}>

          <p style={{ ...p, marginBottom: "2rem" }}>
            This Privacy Policy describes how MustGoDeals (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and handles your personal
            information in accordance with the <strong>Australian Privacy Act 1988 (Cth)</strong> and the Australian
            Privacy Principles (APPs).
          </p>

          <div style={section}>
            <h2 style={h2}>1. What We Collect</h2>
            <p style={p}>We collect only your <strong>email address</strong> when you subscribe to our newsletter or deal alerts. We do not collect your name, phone number, payment details, or any other personal information.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>2. How We Collect It</h2>
            <p style={p}>We collect your email address directly from you when you voluntarily enter it in a subscription form on our website. We do not collect information from third-party sources.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>3. Why We Collect It</h2>
            <p style={p}>We use your email address solely to:</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.5rem" }}>
              <li style={li}>Send our newsletter with car buying guides and negotiation tips</li>
              <li style={li}>Alert you to end-of-month car deals and clearance vehicles in Australia</li>
              <li style={li}>Notify you of significant updates to our service</li>
            </ul>
            <p style={{ ...p, margin: 0 }}>We will not use your email address for any other purpose without your consent.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>4. Sharing Your Information</h2>
            <p style={p}>We do not sell, rent, or trade your personal information. We may share your email address with:</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.5rem" }}>
              <li style={li}><strong>Email delivery providers</strong> — to send newsletters and alerts on our behalf</li>
              <li style={li}><strong>Analytics providers (Google Analytics)</strong> — for anonymous usage statistics only; your email address is never shared with analytics services</li>
            </ul>
          </div>

          <div style={section}>
            <h2 style={h2}>5. Cookies &amp; Analytics</h2>
            <p style={p}>Our website uses Google Analytics to understand how visitors use the site. This data is collected anonymously and does not include your email address. You can opt out of Google Analytics tracking via your browser settings or the <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: "#8A9A10" }}>Google Analytics opt-out tool</a>.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>6. Data Retention</h2>
            <p style={p}>We retain your email address for as long as you remain subscribed. You can unsubscribe at any time by:</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.5rem" }}>
              <li style={li}>Clicking the unsubscribe link in any email we send you</li>
              <li style={li}>Emailing us directly at <a href="mailto:hello.mustgodeals@gmail.com" style={{ color: "#8A9A10" }}>hello.mustgodeals@gmail.com</a></li>
            </ul>
            <p style={{ ...p, margin: 0 }}>Upon unsubscribing, your email address will be removed from our active mailing list within 30 days.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>7. Your Rights</h2>
            <p style={p}>Under the Privacy Act 1988, you have the right to:</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.5rem" }}>
              <li style={li}>Access the personal information we hold about you</li>
              <li style={li}>Request correction of inaccurate or outdated information</li>
              <li style={li}>Request deletion of your information</li>
              <li style={li}>Lodge a complaint if you believe we have mishandled your data</li>
            </ul>
            <p style={{ ...p, margin: 0 }}>To exercise any of these rights, contact us at <a href="mailto:hello.mustgodeals@gmail.com" style={{ color: "#8A9A10" }}>hello.mustgodeals@gmail.com</a>. We will respond within 30 days.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>8. Data Security</h2>
            <p style={p}>We take reasonable steps to protect your information from misuse, interference, loss, and unauthorised access. Our website is served over HTTPS. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>9. Changes to This Policy</h2>
            <p style={p}>We may update this policy from time to time. The most recent version will always be available at this URL. Continued use of our service after changes are posted constitutes acceptance of the updated policy.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>10. Contact Us</h2>
            <p style={p}>For privacy-related questions or requests:</p>
            <p style={{ ...p, margin: 0 }}>
              <strong>MustGoDeals</strong><br />
              <a href="mailto:hello.mustgodeals@gmail.com" style={{ color: "#8A9A10" }}>hello.mustgodeals@gmail.com</a>
            </p>
          </div>

          <div style={{ ...section, marginBottom: 0, paddingTop: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <h2 style={h2}>11. Complaints</h2>
            <p style={{ ...p, margin: 0 }}>
              If you are not satisfied with our response to a privacy complaint, you may contact the{" "}
              <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{" "}
              <a href="https://www.oaic.gov.au" style={{ color: "#8A9A10" }}>www.oaic.gov.au</a>.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
