import React from "react";
import { useHistory } from "react-router-dom";

import { GAME_STATE, getSeconds } from "./utils";

const Header = ({ timeLeft, gameState, endGame }) => {
  const history = useHistory();

  return (
    <header className="navbar">
      {gameState === GAME_STATE.PLAYING && (
        <>
          <section className="navbar-center text-error">
            {getSeconds(timeLeft)} Seconds Left
          </section>
          <section className="navbar-center">
            <button
              className="btn btn-default"
              onClick={() => history.push("/check-for-understanding")}
            >
              End Game
            </button>
          </section>
        </>
      )}
    </header>
  );
};

export default Header;
