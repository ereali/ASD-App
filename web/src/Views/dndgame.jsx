import {CATEGORY, ANSWERS} from "..Components/dnddata.jsx";
import {shuffle, STATE} from "..Components/shuffle.jsx"
const initial = {
    bench: shuffle(ANSWERS),
    [ANSWERS.PUBLIC]:[],
    [ANSWERS.PRIVATE]:[],
    gameState: STATE.READY,
    timeLeft: 0,
};



//move to view

