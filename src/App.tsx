import { useEffect, useState } from "react";
import data from "../data.json";
import "./App.css";

const allFields = [
  { key: "skaterFullName", label: "Name" },
  { key: "teamAbbrevs", label: "Team" },
  { key: "gamesPlayed", label: "GP" },
  { key: "points", label: "Points" },
  { key: "goals", label: "Goals" },
  { key: "assists", label: "Assists" },
  { key: "plusMinus", label: "+/-" },
  { key: "ppGoals", label: "PP Goals" },
  { key: "shGoals", label: "SH Goals" },
  { key: "shots", label: "Shots" },
  { key: "shootingPct", label: "Shooting %" },
  { key: "timeOnIcePerGame", label: "TOI/Game" },
  { key: "evGoals", label: "EV Goals" },
  { key: "evPoints", label: "EV Points" },
  { key: "gameWinningGoals", label: "GW Goals" },
  { key: "otGoals", label: "OT Goals" },
  { key: "penaltyMinutes", label: "PIM" },
  { key: "pointsPerGame", label: "Points/Game" },
  { key: "goalsPerGame", label: "Goals/Game" },
  { key: "shotsPerGame", label: "Shots/Game" },
];

function App() {
  const [players, setPlayers] = useState(data.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleFields, setVisibleFields] = useState(allFields.map(field => field.key));
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setPlayers(
      data.data.filter((player) =>
        player.skaterFullName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleFieldChange = (fieldKey: string) => {
    setVisibleFields(prevFields =>
      prevFields.includes(fieldKey)
        ? prevFields.filter(key => key !== fieldKey)
        : [...prevFields, fieldKey]
    );
  };

  return (
    <main>
      <h1>NHL Player Statistics</h1>
      <input
        type="text"
        placeholder="Search by player name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setIsPopupOpen(true)}>Select Fields</button>
      {isPopupOpen && (
        <>
          <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}></div>
          <div className="popup">
            <h2>Select Fields</h2>
            <div className="field-selector">
              {allFields.map(field => (
                <label key={field.key}>
                  <input
                    type="checkbox"
                    checked={visibleFields.includes(field.key)}
                    onChange={() => handleFieldChange(field.key)}
                  />
                  {field.label}
                </label>
              ))}
            </div>
            <button onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        </>
      )}
      <table>
        <thead>
          <tr>
            {allFields.map(field => (
              visibleFields.includes(field.key) && <th key={field.key}>{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.playerId}>
              {allFields.map(field => (
                visibleFields.includes(field.key) && <td key={field.key}>{player[field.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
