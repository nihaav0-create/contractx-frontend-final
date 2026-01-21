import { useEffect, useState } from "react";
import { loadData } from "../utils/storage";
import ContractTable from "../components/ContractTable";

export default function Dashboard() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setContracts(loadData("contracts"));
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <div className="card">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Dashboard</h2>

      {contracts.length === 0 ? (
        <p>No contracts created yet.</p>
      ) : (
        <ContractTable
          contracts={contracts}
          refresh={() => setContracts(loadData("contracts"))}
        />
      )}
    </div>
  );
}
