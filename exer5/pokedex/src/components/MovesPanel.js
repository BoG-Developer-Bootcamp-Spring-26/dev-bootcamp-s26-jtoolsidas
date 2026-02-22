import React from "react";

function MovesPanel({ pokemon }) {
  return (
    <div className="panel moves">
      {pokemon.moves.map((moveObj) => (
        <div key={moveObj.move.name}>
          {moveObj.move.name}
        </div>
      ))}
    </div>
  );
}

export default MovesPanel;