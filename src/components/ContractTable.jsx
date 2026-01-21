import StatusBadge from "./StatusBadge";
import { transitions } from "../utils/lifecycle";
import { saveData, loadData } from "../utils/storage";
import html2pdf from "html2pdf.js";

const statusOrder = ["Created", "Approved", "Sent", "Signed", "Locked"];

export default function ContractTable({ contracts, refresh }) {

  const changeStatus = (contract, newStatus) => {
    const all = loadData("contracts");
    const updated = all.map(c =>
      c.id === contract.id ? { ...c, status: newStatus } : c
    );
    saveData("contracts", updated);
    refresh();
  };

  const exportPDF = (id) => {
    const element = document.getElementById(`contract-${id}`);
    html2pdf().from(element).save(`Contract-${id}.pdf`);
  };

  return (
    <div className="card">
      {contracts.map(c => (
        <div key={c.id} id={`contract-${c.id}`} className="timeline-card">

          <h3>Contract #{c.id}</h3>
          <p><strong>Blueprint:</strong> {c.blueprintName}</p>

          {/* Status Timeline */}
          <div className="timeline">
            {statusOrder.map(step => (
              <div
                key={step}
                className={`timeline-step ${
                  statusOrder.indexOf(step) <= statusOrder.indexOf(c.status)
                    ? "active"
                    : ""
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          {/* Current Status */}
          <StatusBadge status={c.status} />

          {/* Action Buttons */}
          <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {transitions[c.status].map(s => (
              <button key={s} onClick={() => changeStatus(c, s)}>
                {s}
              </button>
            ))}

            {/* PDF Export */}
            <button onClick={() => exportPDF(c.id)}>
              Export PDF
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
