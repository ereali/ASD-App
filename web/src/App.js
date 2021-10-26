import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import FourButtonModule from "./Components/fourbuttonquizmodule";
import TrueFalseModule from "./Components/truefalsequizmodule";
import QuizButton from "./Components/quizbutton";
import ProgressBar from "./Components/progressbar";

function App() {
  // const history = useHistory();
  return (
    <div className="App" backgroundColor="blue">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              ASD App
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>{/* <Link to="/features">Features</Link> */}</Nav.Link>
              <Nav.Link>{/* <Link to="/pricing">Pricing</Link> */}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route path="/features">
            <Card>
              <Card.Body>Features Route</Card.Body>
            </Card>
          </Route>
          <Route path="/pricing">
            <Card>
              <Card.Body>Pricing Route</Card.Body>
            </Card>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>

      <div>
        <ProgressBar now="75" />
      </div>
      <Container classname="quiz">
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
        <br></br>
      </Container>
    </div>
  );
}

export default App;
