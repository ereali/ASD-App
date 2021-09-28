import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";

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
      <div>
        <SettingsButton onClick={clickMe}>Settings</SettingsButton>
      </div>
      <div>
        <ChatButton onClick={clickMe}>Chat</ChatButton>
      </div>
      <div>
        <BackButton onClick={clickMe}>Back</BackButton>
      </div>
    </div>
  );
}

const SettingsButton = styled.button`
  background-color: #4d91ff;
  color: white;
  padding: 5px 15px;
  border-radius: 17px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #1c73ff;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const ChatButton = styled.button`
  background-color: #e36ae6;
  color: white;
  padding: 5px 15px;
  border-radius: 17px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #df0ee3;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const BackButton = styled.button`
  background-color: #ff903b;
  color: white;
  padding: 5px 15px;
  border-radius: 17px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #ff6f00;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function clickMe() {
  alert("You clicked me!");
}

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
};

export default App;
