import { Col, Row, Container } from "react-bootstrap";
import Button from "../Components/Button.jsx";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
function HomeView() {
  const HomePage = styled.div`
    background-color: #6b9ac4;
    height: 100%;
    display: flex;
    align-items: center;
  `;

  const history = useHistory();

  return (
    <HomePage>
      <Container fluid>
        <Row></Row>
        <Row>
          <Col>
            <Button
              color="#488B49"
              onClick={() => history.push("/topic-towns")} //start
              height="30vw"
              width="35vw"
              children="Play"
              fontsize="4vw"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              textColor="white"
            ></Button>
          </Col>
          <Col>
            <Button
              color="#274790"
              onClick={() => history.push("/settings")} //settings
              height="30vw"
              width="35vw"
              children="Parent Portal"
              fontsize="4vw"
              margin="10px 0px"
              borderradius="16px"
              padding="5px 15px"
              textColor="white"
            ></Button>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </HomePage>
  );
}
export default HomeView;
