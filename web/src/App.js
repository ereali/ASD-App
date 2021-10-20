import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import styled from "styled-components";
import Button from "./Components/Button.jsx";
import Text from "./Components/Text.jsx";
import Textarea from "./Components/TextArea.jsx";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";
// UI Components
import TopicTownView from "./Views/TopicTownView";

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
      <Card>
              <div>
                <Text
                  text="Please write the message that you would like your parents to 
                be aware about!"
                >
                  {" "}
                </Text>
              </div>
              <div>
                <Textarea> </Textarea>
              </div>
              <div>
                <Button
                  children="Submit"
                  color="#20af88"
                  textColor="#c5be81"
                  onClick={() => alert("Submitted")}
                ></Button>
              </div>
            </Card>
      {
        //  This TopicTownView displays 3 Topic Towns in two rows offset (labels are named within TopicTownView)
        // <TopicTownView />
      }
    </div>
  );
}

export default App;
