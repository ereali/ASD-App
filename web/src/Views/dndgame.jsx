import { CATEGORY, ANSWERS } from "..Components/DND/dnddata.jsx";
import { shuffle, STATE, move } from "..Components/DND/shuffle.jsx";

import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Modal from "../Components/DND/Modal";
import Header from "../Components/DND/Header";
import Dropzone from "../Components/DND/Dropzone";
import Footer from "../Components/DND/Footer";

const GAME_DURATION = 1000 * 30; // 30 seconds

const initial = {
  bench: shuffle(ANSWERS),
  [CATEGORY.PUBLIC]: [],
  [CATEGORY.PRIVATE]: [],
  gameState: STATE.READY,
};

class dndgame extends React.Component {
  state = initial;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        gameState: STATE.PLAYING,
      },
      this.gameLoop
    );
  };

  //gameLoop = () => {
  //this.timer = setInterval(1000);
  //};

  endGame = () => {
    this.setState({
      gameState: STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initial);
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState((state) => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, bench, ...groups } = this.state;
    const isDropDisabled = gameState === STATE.DONE;

    return (
      <>
        <Header gameState={gameState} endGame={this.endGame} />
        {this.state.gameState !== STATE.PLAYING && (
          <Modal
            startGame={this.startGame}
            resetGame={this.resetGame}
            gameState={gameState}
            groups={groups}
          />
        )}
        {(this.state.gameState === STATE.PLAYING ||
          this.state.gameState === STATE.DONE) && (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="container">
              <div className="columns">
                <Dropzone
                  id={CATEGORY.PUBLIC}
                  answers={this.state[CATEGORY.PUBLIC]}
                  isDropDisabled={isDropDisabled}
                />
                <Dropzone
                  id="bench"
                  answers={bench}
                  isDropDisabled={isDropDisabled}
                />
                <Dropzone
                  id={CATEGORY.PRIVATE}
                  answers={this.state[CATEGORY.PRIVATE]}
                  isDropDisabled={isDropDisabled}
                />
              </div>
            </div>
          </DragDropContext>
        )}
        <Footer />
      </>
    );
  }
}

export default dndgame;
//move to view
