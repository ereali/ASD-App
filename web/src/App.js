import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import FourButtonModule from "./Components/fourbuttonquizmodule";
import TrueFalseModule from "./Components/truefalsequizmodule";

function App() {
  // const history = useHistory();
  return (
    <div className="App">
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
          <Route path="/">
            <Card>
              <Card.Body>Home Route</Card.Body>
            </Card>
          </Route>
        </Switch>
      </div>
      {/* <div>
        <SettingsButton onClick={clickMe}>Settings</SettingsButton>
      </div>
      <div>
        <ChatButton onClick={clickMe}>Chat</ChatButton>
      </div>
      <div>
        <BackButton onClick={clickMe}>Back</BackButton>
      </div> */}
      <div>
        <FourButtonModule
          Answer1="hello world"
          Answer2="hey"
          Answer3="wow"
          Answer4="woah"
          backgroundColor="#1556bf"
          textColor="#ffffff"
          fontSize="17px"
          hoverBackgroundColor="#0e3a80"
        />
      </div>
    </div>
  );
}

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
};

export default App;
