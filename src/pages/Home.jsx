import { FilePlus, FileText, LayoutDashboard, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({ b: 0, c: 0, u: 0, r: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({ b: 12, c: 48, u: 6, r: 92 });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="card">
        <h1 style={{ fontSize: "32px" }}>Welcome to ContractX</h1>
        <p style={{ color: "#6b7280" }}>
          Create, manage, and track contracts with ease.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div className="stat-card"><h3>Blueprints</h3><p>{stats.b}</p></div>
        <div className="stat-card"><h3>Contracts</h3><p>{stats.c}</p></div>
        <div className="stat-card"><h3>Users</h3><p>{stats.u}</p></div>
        <div className="stat-card"><h3>Success</h3><p>{stats.r}%</p></div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}
      >
        <div className="card"><FilePlus /> <h3>Create Blueprints</h3></div>
        <div className="card"><FileText /> <h3>Generate Contracts</h3></div>
        <div className="card"><LayoutDashboard /> <h3>Track Progress</h3></div>
        <div className="card"><Zap /> <h3>Fast & Secure</h3></div>
      </div>
    </div>
  );
}
