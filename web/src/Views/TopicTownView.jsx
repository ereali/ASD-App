import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TownImage from "../Resources/TopicTown/TownImage.svg";
import TopicTown from "../Components/TopicTown/TopicTown.jsx";
import styled from "styled-components";
import BuildingIcon from "../Resources/TopicTown/BuildingIcon.svg";
import BusIcon from "../Resources/TopicTown/BusIcon.svg";
import MarketIcon from "../Resources/TopicTown/MarketIcon.svg";
import TopicTownBackground from "../Resources/TopicTown/TopicTownBackground2.png";

/*
The TopicTownView component creates and displays a variable number of TopicTowns
The TopicTowns are arranged in offset columns using React Bootstrap
*/

function TopicTownView() {
  // TopicTownView has no props

  const TopicTownPage = styled.div`
    padding-top: 1%;
    height: 100%;
    background-image: url(${TopicTownBackground});
    background-color: #6b9ac4;
    background-size: 100% 100%;
  `;

  return (
    <TopicTownPage>
      <Container fluid>
        <Row>
          <Col md={2}>
            <TopicTown
              imageLink={BuildingIcon}
              color="#488B49"
              labelText="Public vs. Private"
              url="/public_vs_private"
            />
          </Col>
          <Col md={{ span: 2, offset: 8 }}>
            <TopicTown
              imageLink={BusIcon}
              color="#488B49"
              labelText="Body Changes"
              url="/body_changes"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <TopicTown
              imageLink={MarketIcon}
              color="#488B49"
              labelText="Internet Safety"
              url="/internet_safety"
            />
          </Col>
        </Row>
      </Container>
    </TopicTownPage>
  );
}

export default TopicTownView;
