import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TownImage from "../Resources/TopicTown/TownImage.svg";
import TopicTown from "../Components/TopicTown/TopicTown.jsx";

/*
The TopicTownView component creates and displays a variable number of TopicTowns
The TopicTowns are arranged in offset columns using React Bootstrap
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
              url="/public_vs_private"
            />
          </Col>
          <Col md={{ span: 2, offset: 6 }}>
            <TopicTown
              imageLink={TownImage}
              color="#6B9AC4"
              labelText="Body Changes"
              url="/body_changes"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <TopicTown
              imageLink={TownImage}
              color="#507255"
              labelText="Internet Safety"
              url="/internet_safety"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopicTownView;
