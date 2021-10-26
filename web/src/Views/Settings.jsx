import Button from "../Components/Button.jsx";
import chat from "../Resources/Settings/chat.png";
import trophy from "../Resources/Settings/trophy.png";
import settings from "../Resources/Settings/settings.png";
import checklist from "../Resources/Settings/checklist.png";
import progress from "../Resources/Settings/progress.png";
import question from "../Resources/Settings/question.png";
import { Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function Settings() {
  const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Button
          //children="./logo"
          color="#6B9AC4"
          textColor="#c5be81"
          onClick={() => alert("test")}
          margin="10px 0px"
          borderradius="16px"
          padding="5px 15px"
          height="100px"
          width="100px"
        >
          <img src={chat} />
        </Button>
        <Button
          //children="Color Pallete"
          onClick={() => alert("I've been clicked")}
          color="#6B9AC4"
          textColor="#FFFFFF"
          margin="10px 0px"
          borderradius="16px"
          padding="5px 15px"
          height="100px"
          width="100px"
        >
          <img src={trophy} />
        </Button>
      </Row>

      <Row>
        <Button
          //children="Smaller"
          onClick={() => prompt("type a number in")}
          color="#6B9AC4"
          textColor="#00000"
          margin="10px 0px"
          borderradius="16px"
          padding="5px 15px"
          height="100px"
          width="100px"
        >
          <img src={progress} />
        </Button>
        <Button
          //children="Smaller"
          onClick={() => prompt("type a number in")}
          color="#6B9AC4"
          textColor="#00000"
          margin="10px 0px"
          borderradius="16px"
          padding="5px 15px"
          height="100px"
          width="100px"
        >
          <img src={checklist} />
        </Button>
      </Row>

      <Row>
        <Button
          //children="Smaller"
          onClick={() => prompt("type a number in")}
          color="#6B9AC4"
          textColor="#00000"
          margin="10px 0px"
          borderradius="16px"
          padding="5px 15px"
          height="100px"
          width="100px"
        >
          <img src={settings} />
        </Button>
        <Button
          //children="Smaller"
          onClick={() => prompt("type a number in")}
          color="#6B9AC4"
          textColor="#00000"
          margin="10px 0px"
          borderradius="16px"
          padding="5px 15px"
          height="100px"
          width="100px"
        >
          <img src={question} />
        </Button>
      </Row>
    </Container>
  );
}

export default Settings;
