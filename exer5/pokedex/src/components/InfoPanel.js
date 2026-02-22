import React from "react";

function InfoPanel({ pokemon }) {
  return (
    <div className="panel">
      <div className="info-row">
        <span>height: </span>
        <span>{pokemon.height / 10} m</span>
      </div>

      <div className="info-row">
        <span>weight: </span>
        <span>{pokemon.weight / 10} kg</span>
      </div>

      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name} className="info-row">
          <span>{stat.stat.name}: </span>
          <span>{stat.base_stat}</span>
        </div>
      ))}
    </div>
  );
}

export default InfoPanel;