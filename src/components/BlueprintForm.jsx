import { useState } from "react";
import { saveData, loadData } from "../utils/storage";

export default function BlueprintForm() {
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);
  const [label, setLabel] = useState("");
  const [type, setType] = useState("Text");

  const addField = () => {
    if (!label.trim()) return alert("Enter field label");
    setFields([...fields, { label, type }]);
    setLabel("");
  };

  const saveBlueprint = () => {
    if (!name.trim()) return alert("Enter blueprint name");

    const blueprints = loadData("blueprints");
    blueprints.push({ id: Date.now(), name, fields });
    saveData("blueprints", blueprints);

    setName("");
    setFields([]);
  };

  return (
    <div className="card">
      <h2>Create Blueprint</h2>

      <input
        placeholder="Blueprint Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Field Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Text</option>
        <option>Date</option>
        <option>Signature</option>
        <option>Checkbox</option>
      </select>

      {/* Button spacing added here */}
      <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
        <button onClick={addField}>Add Field</button>
        <button onClick={saveBlueprint}>Save Blueprint</button>
      </div>
    </div>
  );
}
