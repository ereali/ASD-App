import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Button from "./Components/Button.jsx";
import chat from "./chat-121.png"
import trophy from "./trophy.png"
function App() {
  // const history = useHistory();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse>
            <Navbar.Brand href="#home">
              <img
                alt="failed"
                src="./logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              I-CCEW SoBA 2021
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
          <Route path="/test"></Route>
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
      
      <h1>PARENT PORTAL</h1>
      <div>
      <Button
        //children="./logo"
        color="#c5be81"
        textColor="#c5be81"
        onClick={() => alert("test")}
        margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
        height = "100px"
        width = "100px"
      ><img src={chat}/></Button>
      <Button
        //children="Color Pallete"
        onClick={() => alert("I've been clicked")}
        color="#C08497"
        textColor="#FFFFFF"
        margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
        height = "100px"
        width = "100px"
      ><img src={trophy}/></Button></div>
      <div>
      <Button
        //children="Smaller"
        onClick={() => prompt("type a number in")}
        color="#d31d1d"
        textColor="#00000"
        margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
        height = "100px"
        width = "100px"
      ></Button>
      <Button
        //children="Smaller"
        onClick={() => prompt("type a number in")}
        color="#d31d1d"
        textColor="#00000"
        margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
        height = "100px"
        width = "100px"
      ></Button>
      <div>
      <Button
        //children="Smaller"
        onClick={() => prompt("type a number in")}
        color="#d31d1d"
        textColor="#00000"
        margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
        height = "100px"
        width = "100px"
      ></Button>
      <Button
        //children="Smaller"
        onClick={() => prompt("type a number in")}
        color="#d31d1d"
        textColor="#00000"
        margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
        height = "100px"
        width = "100px"
      ></Button>
      </div>
      </div>

      </div>
    </div>
  );
}

export default App;
