import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TownImage from "./TownImage.svg";
import TopicTown from "./Components/TopicTown.jsx";

function TopicTownView() {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <TopicTown imageLink={TownImage} labelText="Topic Name 1" />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <TopicTown imageLink={TownImage} labelText="Topic Name 1" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <TopicTown imageLink={TownImage} labelText="Topic Name 1" />
        </Col>
      </Row>
    </Container>
  );
}

export default TopicTownView;
