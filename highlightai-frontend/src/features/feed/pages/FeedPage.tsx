import { Link } from "react-router-dom";

const buttonStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#2563eb", // blue-600
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "#4b5563", // gray-600
};

export default function FeedPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Feed Page</h1>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Link to="/upload">
          <button style={buttonStyle}>Upload Video</button>
        </Link>

        <Link to="/signup">
          <button style={secondaryButtonStyle}>Sign Up</button>
        </Link>

        <Link to="/signin">
          <button style={secondaryButtonStyle}>Sign In</button>
        </Link>
      </div>
    </div>
  );
}
