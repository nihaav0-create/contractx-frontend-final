import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home, FilePlus, FileText, LayoutDashboard, LogOut } from "lucide-react";

import HomePage from "./pages/Home";
import CreateBlueprint from "./pages/CreateBlueprint";
import CreateContract from "./pages/CreateContract";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { logout, getUser } from "./utils/auth";

export default function App() {
  const location = useLocation();
  const user = getUser();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  // Show only Login if not logged in
  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  // Main App Layout
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="logo">ContractX</h2>

        <Link to="/"> <Home size={18} /> Home </Link>
        <Link to="/blueprint"> <FilePlus size={18} /> Create Blueprint </Link>
        <Link to="/contract"> <FileText size={18} /> Create Contract </Link>
        <Link to="/dashboard"> <LayoutDashboard size={18} /> Dashboard </Link>

        <button onClick={handleLogout} style={{ marginTop: "auto" }}>
          <LogOut size={16} /> Logout
        </button>
      </aside>

      <main className="main-content" key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blueprint" element={<CreateBlueprint />} />
          <Route path="/contract" element={<CreateContract />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
