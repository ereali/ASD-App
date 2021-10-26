import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import FourButtonModule from "./Components/fourbuttonquizmodule";
import TrueFalseModule from "./Components/truefalsequizmodule";
import QuizButton from "./Components/quizbutton";
import ProgressBar from "./Components/progressbar";

function QuizView(props) {
  <Container classname="quiz">
    <br />
    <div>
      <ProgressBar now="75" />
    </div>
    <br />
    <div className="FourButtonModule">
      <QuizButton
        name="quizlabel"
        backgroundColor="#1B264F"
        œ
        textColor="#ffffff"
        fontSize="30px"
        hoverBackgroundColor="#101730"
        content="Is sharing a photo of your face online ok?"
      />
    </div>
    <div className="FourButtonModule">
      <FourButtonModule
        content1="Yes"
        content2="Yes, only if you’ve known them for a few weeks"
        content3="Yes, but only to people you know in real life"
        content4="No"
        backgroundColor="#507255"
        textColor="#ffffff"
        fontSize="25px"
        hoverBackgroundColor="#324735"
      />
    </div>
    <QuizButton
      name="backButton"
      backgroundColor="#1B264F"
      textColor="#ffffff"
      fontSize="30px"
      hoverBackgroundColor="#101730"
      content="Back"
      url="/topic-towns"
    />
    <br></br>
  </Container>;
}

export default QuizView;
