import { React, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Label from "../Components/TopicTown/Label";
import Title from "../Components/Content/Title";

import BookIcon from "../Resources/Content/BookIcon.svg";
import SchoolIcon from "../Resources/Content/SchoolIcon.svg";
import ToiletIcon from "../Resources/Content/ToiletIcon.svg";
import TreeIcon from "../Resources/Content/TreeIcon.svg";

import "bootstrap/dist/css/bootstrap.min.css";

function PublicPrivateContentView(props) {
  const ContentPage = styled.div`
    padding-top: 1%;
    height: 100%;
    background-color: #6b9ac4;
    background-size: 100% 100%;
  `;

  const [data, setData] = useState("Click a place to visit it!");

  var place = "";
  var placeType = "";

  const parentToChild = (place, placeType) => {
    setData(place + " is a " + placeType + " place.");
  };

  return (
    <ContentPage>
      <div style={{ position: "relative", top: "50%" }}>
        <Title parentToChild={data} />
      </div>

      <Container fluid>
        <Row>
          <Col md={2}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                parentToChild("School", "public");
              }}
            >
              <Label
                backgroundColor="#488B49"
                name="School"
                textColor="white"
                fontWeight="normal"
                fontSize="1.9vw"
              />
              <Image style={{ width: "12vw" }} src={SchoolIcon} />
            </div>
          </Col>
          <Col md={{ span: 2, offset: 3 }}></Col> {/*Spacing column*/}
          <Col md={{ span: 2, offset: 3 }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                parentToChild("The park", "public");
              }}
            >
              <Label
                backgroundColor="#488B49"
                name="Park"
                textColor="white"
                fontWeight="normal"
                fontSize="1.9vw"
              />
              <Image style={{ width: "12vw" }} src={TreeIcon} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                parentToChild("Your bathroom", "private");
              }}
            >
              <Label
                backgroundColor="#488B49"
                name="Your bathroom"
                textColor="white"
                fontWeight="normal"
                fontSize="1.9vw"
              />
              <Image style={{ width: "12vw" }} src={ToiletIcon} />
            </div>
          </Col>
          <Col md={{ span: 2, offset: 3 }}></Col>
          <Col md={{ span: 2, offset: 3 }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                parentToChild("The library", "public");
              }}
            >
              <Label
                backgroundColor="#488B49"
                name="Library"
                textColor="white"
                fontWeight="normal"
                fontSize="1.9vw"
              />
              <Image style={{ width: "12vw" }} src={BookIcon} />
            </div>
          </Col>
        </Row>
      </Container>
    </ContentPage>
  );
}

export default PublicPrivateContentView;
