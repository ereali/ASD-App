import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import FourButtonModule from "../Components/fourbuttonquizmodule";
import TrueFalseModule from "../Components/truefalsequizmodule";
import QuizButton from "../Components/quizbutton";
import ProgressBar from "../Components/progressbar";

function QuizView(props) {
  const QuizPage = styled.div`
    background-color: #6b9ac4;
    height: 100%;
  `;

  const ProgressBarContainer = styled.div`
    height: 2vw;
  `;

  return (
    <QuizPage>
      <Container classname="quiz" fluid>
        <br />
        <ProgressBarContainer>
          <ProgressBar now="75" style={{ height: "1vw" }} />
        </ProgressBarContainer>
        <br />
        <div className="FourButtonModule">
          <QuizButton
            name="quizlabel"
            backgroundColor="#1B264F"
            œ
            textColor="#ffffff"
            fontSize="3vw"
            hoverBackgroundColor="#101730"
            content="Which of these places are private?"
          />
        </div>
        <div className="FourButtonModule">
          <FourButtonModule
            content1="The library"
            content2="The park"
            content3="Your bathroom"
            content4="The school"
            backgroundColor="#507255"
            textColor="#ffffff"
            fontSize="2vw"
            hoverBackgroundColor="#324735"
          />
        </div>
        <QuizButton
          name="backButton"
          backgroundColor="#1B264F"
          textColor="#ffffff"
          fontSize="2vw"
          hoverBackgroundColor="#101730"
          content="Back"
          url="/topic-towns"
        />
        <br></br>
      </Container>
    </QuizPage>
  );
}

export default QuizView;
