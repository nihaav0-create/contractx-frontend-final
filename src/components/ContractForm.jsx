import { useState, useEffect } from "react";
import { loadData, saveData } from "../utils/storage";

export default function ContractForm() {
  const [blueprints, setBlueprints] = useState([]);
  const [selected, setSelected] = useState(null);
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlueprints(loadData("blueprints"));
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div>
        <div className="skeleton skeleton-input"></div>
        <div className="skeleton skeleton-input"></div>
        <div className="skeleton skeleton-input"></div>
        <div className="skeleton skeleton-button"></div>
      </div>
    );
  }

  const createContract = () => {
    const contracts = loadData("contracts");

    contracts.push({
      id: Date.now(),
      blueprintName: selected.name,
      status: "Created",
      values,
      createdAt: new Date().toLocaleDateString()
    });

    saveData("contracts", contracts);
    alert("Contract Created!");
  };

  return (
    <div>
      <select onChange={(e) =>
        setSelected(blueprints.find(b => b.id == e.target.value))
      }>
        <option value="">Select Blueprint</option>
        {blueprints.map(b => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>

      {selected &&
        selected.fields.map((f, i) => (
          <div key={i}>
            <label>{f.label}</label>
            <input onChange={(e) =>
              setValues({ ...values, [f.label]: e.target.value })
            } />
          </div>
        ))}

      {selected && <button onClick={createContract}>Create Contract</button>}
    </div>
  );
}
