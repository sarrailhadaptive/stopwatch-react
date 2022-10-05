// lapsTable
// renderFirstLap
// insertLapRow
// addNewLap
// compareLaps

import "./Laps.css";

export default function LapsSection() {
  return (
    <div className="lap-table-section">
      <LapsTable />
    </div>
  );
}

// LapsTable
function LapsTable() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Lap 1</td>
          <td>00:00.00</td>
        </tr>
      </tbody>
    </table>
  );
}
