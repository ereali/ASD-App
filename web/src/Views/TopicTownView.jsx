import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TownImage from "../Resources/TopicTown/TownImage.svg";
import TopicTown from "../Components/TopicTown/TopicTown.jsx";

/*
The TopicTownView component creates and displays multiple TopicTowns
The TopicTowns are arranged in columns using React Bootstrap
*/

function TopicTownView() {
  // TopicTownView has no props
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <TopicTown
              imageLink={TownImage}
              color="#6B9AC4"
              labelText="Public vs. Private"
            />
          </Col>
          <Col md={{ span: 2, offset: 6 }}>
            <TopicTown
              imageLink={TownImage}
              color="#6B9AC4"
              labelText="Body Changes"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <TopicTown
              imageLink={TownImage}
              color="#507255"
              labelText="Internet Safety"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopicTownView;
