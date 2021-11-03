import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import TopicTown from "../Components/TopicTown/TopicTown.jsx";
import Label from "../Components/TopicTown/Label";

import BuildingIcon from "../Resources/TopicTown/BuildingIcon.svg";
import BusIcon from "../Resources/TopicTown/BusIcon.svg";
import MarketIcon from "../Resources/TopicTown/MarketIcon.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function PublicPrivateContentView() {
  const TopicTownPage = styled.div`
    padding-top: 1%;
    height: 100%;
    background-color: #6b9ac4;
    background-size: 100% 100%;
  `;

  return (
    <TopicTownPage>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Label
              backgroundColor="#488B49"
              name="Public vs. Private"
              textColor="white"
              fontWeight="normal"
              fontSize="2.5vw"
            />
            <Image style={{ width: "100%" }} src={BuildingIcon} />
          </Col>
          <Col md={{ span: 2, offset: 3 }}>
            <TopicTown
              imageLink={BusIcon}
              color="#488B49"
              labelText="Body Changes"
              url="/body_changes"
            />
          </Col>
          <Col md={{ span: 2, offset: 3 }}>
            <TopicTown
              imageLink={MarketIcon}
              color="#488B49"
              labelText="Internet Safety"
              url="/internet_safety"
            />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Label
              backgroundColor="#488B49"
              name="Public vs. Private"
              textColor="white"
              fontWeight="normal"
              fontSize="2.5vw"
            />
            <Image style={{ width: "100%" }} src={BuildingIcon} />
          </Col>
          <Col md={{ span: 2, offset: 3 }}>
            <TopicTown
              imageLink={BusIcon}
              color="#488B49"
              labelText="Body Changes"
              url="/body_changes"
            />
          </Col>
          <Col md={{ span: 2, offset: 3 }}>
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

export default PublicPrivateContentView;
