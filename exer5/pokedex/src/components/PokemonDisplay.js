import React from "react";
import TypeBadge from "./TypeBadge";

function PokemonDisplay({ pokemon }) {
  return (
    <>
      <div className="image-box">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="name-bar">
        {pokemon.name}
      </div>

      <div className="types-label">Types:</div>
      <div className="types">
        {pokemon.types.map((t) => (
          <TypeBadge key={t.type.name} type={t.type.name} />
        ))}
      </div>
    </>
  );
}

export default PokemonDisplay;