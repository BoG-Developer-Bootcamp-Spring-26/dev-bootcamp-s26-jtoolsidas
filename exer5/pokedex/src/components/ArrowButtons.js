import React from "react";

function ArrowButtons({ dexNumber, setDexNumber }) {
  return (
    <div className="arrow-buttons">
      <button onClick={() => dexNumber > 1 && setDexNumber(dexNumber - 1)}>
        ◀
      </button>

      <button onClick={() => setDexNumber(dexNumber + 1)}>
        ▶
      </button>
    </div>
  );
}

export default ArrowButtons;