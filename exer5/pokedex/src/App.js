import React, { useState, useEffect } from "react";
import "./App.css";
import ArrowButtons from "./components/ArrowButtons";
import PokemonDisplay from "./components/PokemonDisplay";
import InfoPanel from "./components/InfoPanel";
import MovesPanel from "./components/MovesPanel";

const URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [dexNumber, setDexNumber] = useState(132);
  const [pokemon, setPokemon] = useState(null);
  const [activeTab, setActiveTab] = useState("moves");

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`${URL}/${dexNumber}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [dexNumber]);

  return (
    <div className="page">
      <h1>Exercise 5 - PokeDex!</h1>

      <div className="main">
        <div className="left-column">
          {pokemon && (
            <>
              <PokemonDisplay pokemon={pokemon} />
              <ArrowButtons
                dexNumber={dexNumber}
                setDexNumber={setDexNumber}
              />
            </>
          )}
        </div>

        <div className="right-column">
          <h2>{activeTab === "info" ? "Info" : "Moves"}</h2>

          {pokemon &&
            (activeTab === "info" ? (
              <InfoPanel pokemon={pokemon} />
            ) : (
              <MovesPanel pokemon={pokemon} />
            ))}

          <div className="tab-buttons">
            <button
              className={activeTab === "info" ? "active" : ""}
              onClick={() => setActiveTab("info")}
            >
              Info
            </button>

            <button
              className={activeTab === "moves" ? "active" : ""}
              onClick={() => setActiveTab("moves")}
            >
              Moves
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;