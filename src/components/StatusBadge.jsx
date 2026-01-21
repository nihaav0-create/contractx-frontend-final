export default function StatusBadge({ status }) {
  const colors = {
    Created: "#f59e0b",
    Approved: "#3b82f6",
    Sent: "#8b5cf6",
    Signed: "#22c55e",
    Locked: "#64748b",
    Revoked: "#ef4444"
  };

  return (
    <span style={{
      padding: "6px 12px",
      background: colors[status],
      color: "white",
      borderRadius: "999px",
      fontSize: "12px",
      fontWeight: "600"
    }}>
      {status}
    </span>
  );
}
