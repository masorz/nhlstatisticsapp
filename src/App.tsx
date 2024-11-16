import { useEffect, useState } from "react";
import skaters_stats from "../skaters_stats.json";
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

const defaultFields = [
  "skaterFullName",
  "teamAbbrevs",
  "gamesPlayed",
  "points",
  "goals",
  "assists",
];

type Player = {
  playerId: number;
  skaterFullName: string;
  teamAbbrevs: string;
  gamesPlayed: number;
  points: number;
  goals: number;
  assists: number;
  plusMinus: number;
  ppGoals: number;
  shGoals: number;
  shots: number;
  shootingPct: number;
  timeOnIcePerGame: string;
  evGoals: number;
  evPoints: number;
  gameWinningGoals: number;
  otGoals: number;
  penaltyMinutes: number;
  pointsPerGame: number;
  goalsPerGame: number;
  shotsPerGame: number;
};

function App() {
  const [players, setPlayers] = useState<Player[]>(skaters_stats.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleFields, setVisibleFields] = useState(defaultFields);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 50;

  useEffect(() => {
    setPlayers(
      skaters_stats.data.filter((player: Player) =>
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

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedPlayers = players.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (    
    <main>
      <h1 className="text-3xl font-bold underline">
        NHL Player Statistics
      </h1>
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
          {paginatedPlayers.map((player) => (
            <tr key={player.playerId}>
              {allFields.map(field => (
                visibleFields.includes(field.key) && (
                  <td key={field.key}>
                    {typeof player[field.key as keyof Player] === "number"
                      ? (player[field.key as keyof Player] as number).toFixed(2)
                      : player[field.key as keyof Player]}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={(currentPage + 1) * rowsPerPage >= players.length}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default App;
