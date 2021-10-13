import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TownImage from "./TownImage.svg";
import BackgroundPath from "./BackgroundPath.svg";
import TopicTown from "./Components/TopicTown.jsx";

function TopicTownView() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <TopicTown imageLink={TownImage} labelText="Public vs. Private" />
          </Col>
          <Col md={{ span: 2, offset: 6 }}>
            <TopicTown imageLink={TownImage} labelText="Body Changes" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <TopicTown imageLink={TownImage} labelText="Internet Safety" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopicTownView;
