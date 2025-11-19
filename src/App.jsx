import React from "react";
import logo from "./assets/bank-logo.png";
import { useAuthContext } from "@asgardeo/auth-react";


const App = () => {
  const { state, signIn, signOut } = useAuthContext();

  const containerStyle = {
    minHeight: "100vh",
    margin: 0,
    padding: 0,   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at top left, #0f172a 0, #020617 45%, #000000 100%)",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
    color: "#e5e7eb",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "24px",
    padding: "32px 28px",
    background:
      "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.9))",
    boxShadow:
      "0 24px 60px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.18)",
    border: "1px solid rgba(148,163,184,0.3)",
    backdropFilter: "blur(16px)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const logoRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const logoImgStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  };

  const brandTextStyle = {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1,
  };

  const brandNameStyle = {
    fontSize: "1.15rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#e5e7eb",
  };

  const brandTaglineStyle = {
    fontSize: "0.8rem",
    color: "#9ca3af",
  };

  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    alignSelf: "flex-start",
    padding: "4px 10px",
    borderRadius: "999px",
    border: "1px solid rgba(56,189,248,0.35)",
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(8,47,73,0.9))",
    fontSize: "0.75rem",
    color: "#e0f2fe",
  };

  const pillDotStyle = {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, #22c55e 0, #16a34a 40%, #052e16 100%)",
    boxShadow: "0 0 10px rgba(34,197,94,0.85)",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 600,
    letterSpacing: "-0.04em",
  };

  const gradientWordStyle = {
    background: "linear-gradient(135deg, #22d3ee, #38bdf8, #a855f7)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const subtextStyle = {
    fontSize: "0.92rem",
    color: "#9ca3af",
    lineHeight: 1.6,
  };

  const highlightRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    marginTop: "8px",
  };

  const highlightItemStyle = {
    flex: 1,
    fontSize: "0.8rem",
    color: "#9ca3af",
  };

  const highlightLabelStyle = {
    fontSize: "0.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#6b7280",
    marginBottom: "4px",
  };

  const progressOuterStyle = {
    width: "100%",
    height: "6px",
    borderRadius: "999px",
    backgroundColor: "#020617",
    overflow: "hidden",
    marginTop: "6px",
  };

  const progressInnerStyle = {
    width: "68%",
    height: "100%",
    borderRadius: "999px",
    background:
      "linear-gradient(90deg, #22d3ee, #38bdf8, #a855f7, #f97316)",
    boxShadow: "0 0 18px rgba(56,189,248,0.8)",
  };

  const emailRowStyle = {
    marginTop: "14px",
    display: "flex",
    gap: "10px",
  };

  const inputStyle = {
    flex: 1,
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.5)",
    padding: "10px 14px",
    fontSize: "0.85rem",
    backgroundColor: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    outline: "none",
  };

  const buttonStyle = {
    borderRadius: "999px",
    border: "none",
    padding: "10px 18px",
    fontSize: "0.85rem",
    fontWeight: 500,
    cursor: "pointer",
    background:
      "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "#ecfdf5",
    boxShadow:
      "0 10px 25px rgba(22,163,74,0.55), 0 0 0 1px rgba(21,128,61,0.6)",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
  };

  const footerStyle = {
    marginTop: "4px",
    fontSize: "0.7rem",
    color: "#6b7280",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={logoRowStyle}>
          <img src={logo} alt="Bank logo" style={logoImgStyle} />
          <div style={brandTextStyle}>
            <span style={brandNameStyle}>Aurora Bank</span>
            <span style={brandTaglineStyle}>Modern money, under control.</span>
          </div>
        </div>
        <button onClick={ () => signIn() }>Login</button>
        <div style={pillStyle}>
          <span style={pillDotStyle} />
          <span>Private beta in progress</span>
        </div>

        <div>
          <h1 style={headingStyle}>
            Your money,{" "}
            <span style={gradientWordStyle}>beautifully managed.</span>
          </h1>
          <p style={subtextStyle}>
            A new kind of banking experience focused on clarity, automation,
            and real-time control of your finances. We’re polishing the last
            details.
          </p>
        </div>

        <div>
          <div style={highlightRowStyle}>
            <div style={highlightItemStyle}>
              <div style={highlightLabelStyle}>Status</div>
              <div>App security review</div>
            </div>
            <div style={highlightItemStyle}>
              <div style={highlightLabelStyle}>Launch window</div>
              <div>Q1 2026</div>
            </div>
          </div>
          <div style={progressOuterStyle}>
            <div style={progressInnerStyle} />
          </div>
        </div>

        <div>
          <div style={highlightLabelStyle}>Get notified at launch</div>
          <div style={emailRowStyle}>
            <input
              type="email"
              placeholder="you@domain.com"
              style={inputStyle}
            />
            <button type="button" style={buttonStyle}>
              Notify me
            </button>
          </div>
          <div style={footerStyle}>
            No spam. Just one email when we’re live.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
