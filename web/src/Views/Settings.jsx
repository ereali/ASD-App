import Button from "../Components/Button.jsx";
import chat from "../Resources/Settings/chat.png";
import trophy from "../Resources/Settings/trophy.png";
import settings from "../Resources/Settings/settings.png";
import checklist from "../Resources/Settings/checklist.png";
import progress from "../Resources/Settings/progress.png";
import question from "../Resources/Settings/question.png";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Settings() {
  const SettingsPage = styled.div`
    background-color: #6b9ac4;
    height: 100%;
  `;
  const history = useHistory();

  return (
    <SettingsPage>
      <Container fluid>
        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <Button
              //children="./logo"
              color="#488B49"
              textColor="#c5be81"
              onClick={() => alert("test")}
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              height="15vw"
              width="15vw"
            >
              <img src={chat} />
            </Button>
          </Col>
          <Col md={{ span: 2 }}>
            <Button
              //children="Color Pallete"
              onClick={() => alert("I've been clicked")}
              color="#488B49"
              textColor="#FFFFFF"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              height="15vw"
              width="15vw"
            >
              <img src={trophy} />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <Button
              //children="Smaller"
              onClick={() => prompt("type a number in")}
              color="#488B49"
              textColor="#00000"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              height="15vw"
              width="15vw"
            >
              <img src={progress} />
            </Button>
          </Col>
          <Col md={{ span: 2 }}>
            <Button
              //children="Smaller"
              onClick={() => prompt("type a number in")}
              color="#488B49"
              textColor="#00000"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              height="15vw"
              width="15vw"
            >
              <img src={checklist} />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <Button
              //children="Smaller"
              onClick={() => prompt("type a number in")}
              color="#488B49"
              textColor="#00000"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              height="15vw"
              width="15vw"
            >
              <img src={settings} />
            </Button>
          </Col>
          <Col md={{ span: 2 }}>
            <Button
              //children="Smaller"
              onClick={() => prompt("type a number in")}
              color="#488B49"
              textColor="#00000"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              height="15vw"
              width="15vw"
            >
              <img src={question} />
            </Button>
          </Col>
        </Row>
      </Container>
    </SettingsPage>
  );
}

export default Settings;
