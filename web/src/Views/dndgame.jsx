import "spectre.css";
import "../dndindex.css";

import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { HEROES, COMICS } from "../Components/DND/dnddata.jsx";

//import { shuffle, STATE, move } from "../Components/DND/shuffle.jsx";

import {
  shuffle,
  getTimeLeft,
  move,
  GAME_STATE,
} from "../Components/DND/utils";

import Modal from "../Components/DND/Modal";
import Header from "../Components/DND/Header";
import Dropzone from "../Components/DND/Dropzone";
import Footer from "../Components/DND/Footer";

const GAME_DURATION = 1000 * 120; // 30 seconds

const initialState = {
  // we initialize the state by populating the bench with a shuffled collection of heroes
  activities: shuffle(HEROES),
  [COMICS.DC]: [],
  [COMICS.MARVEL]: [],
  gameState: GAME_STATE.READY,
  timeLeft: 0,
};

class DNDGame extends React.Component {
  state = initialState;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
      },
      this.gameLoop
    );
  };

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initialState);
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
    const { gameState, timeLeft, activities, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE;

    return (
      <>
        <Header
          gameState={gameState}
          timeLeft={timeLeft}
          endGame={this.endGame}
        />
        {this.state.gameState !== GAME_STATE.PLAYING && (
          <Modal
            startGame={this.startGame}
            resetGame={this.resetGame}
            timeLeft={timeLeft}
            gameState={gameState}
            groups={groups}
          />
        )}
        {(this.state.gameState === GAME_STATE.PLAYING ||
          this.state.gameState === GAME_STATE.DONE) && (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="container">
              <div className="columns">
                <Dropzone
                  id={COMICS.MARVEL}
                  heroes={this.state[COMICS.MARVEL]}
                  isDropDisabled={isDropDisabled}
                />
                <Dropzone
                  id="activities"
                  heroes={activities}
                  isDropDisabled={isDropDisabled}
                />
                <Dropzone
                  id={COMICS.DC}
                  heroes={this.state[COMICS.DC]}
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

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default DNDGame;
