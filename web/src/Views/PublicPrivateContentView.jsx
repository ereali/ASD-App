import { React, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Label from "../Components/TopicTown/Label";
import Title from "../Components/Content/Title";
import Button from "../Components/Button";
import Avatar from "../Components/Content/Avatar";

// Location Icons
import BookIcon from "../Resources/Content/BookIcon.svg";
import SchoolIcon from "../Resources/Content/SchoolIcon.svg";
import ToiletIcon from "../Resources/Content/ToiletIcon.svg";
import TreeIcon from "../Resources/Content/TreeIcon.svg";
import ChildAvatar from "../Resources/Content/ChildAvatar.png";

import "bootstrap/dist/css/bootstrap.min.css";

function PublicPrivateContentView(props) {
  // The ContentPage div encloses the entire view
  const ContentPage = styled.div`
    padding-top: 1%;
    height: 100%;
    background-color: #6b9ac4;
  `;

  // data can be changed using the function setData. Here it displays a default message before the user clicks a location
  const [data, setData] = useState("Click a place to visit it!");

  var place = "";
  var placeType = "";
  const history = useHistory();

  // parentToChild function takes place and placeType as parameters to set and pass a string to display in a Title component
  const parentToChild = (place, placeType) => {
    setData(place + " is a " + placeType + " place.");
  };

  return (
    <ContentPage>
      <div
        style={{
          position: "absolute",
          margin: "auto",
          left: "0",
          right: "0",
          top: "50%",
        }}
      >
        <Title parentToChild={data} />{" "}
        {/* child Title component displays the string stored in data*/}
      </div>

      <div // Go to Game Button
        style={{
          position: "relative",
          marginTop: "1%",
          marginBottom: "1%",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
        }}
      >
        <Button
          color="#274790"
          children="Go to Game"
          borderradius="16px"
          textColor="white"
          fontsize="2vw"
          padding="10px"
          onClick={() => history.push("/drag-and-drop-game")}
        ></Button>
      </div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <div // this encloses a School label and icon
              style={{
                cursor: "pointer",
                marginBottom: "50px",
                position: "relative",
              }}
              onClick={() => {
                parentToChild("School", "public"); // when clicked, this div updates the string displayed in the Title component
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
              <Avatar
                src={ChildAvatar}
                positionLeft="50%"
                myData={data}
              ></Avatar>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 3 }}></Col> {/*Spacing column*/}
          <Col md={{ span: 2, offset: 3 }}>
            <div // this div encloses a Park label and icon
              style={{
                cursor: "pointer",
                marginBottom: "50px",
                position: "relative",
              }}
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
              <Avatar src={ChildAvatar} positionLeft="-50%"></Avatar>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <div // this div encloses a Bathroom label and icon
              style={{ cursor: "pointer", position: "relative" }}
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
              <Avatar src={ChildAvatar} positionLeft="50%"></Avatar>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 3 }}></Col> {/* Spacing column*/}
          <Col md={{ span: 2, offset: 3 }}>
            <div // this div encloses a Library label and icon
              style={{ cursor: "pointer", position: "relative" }}
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
              <Avatar src={ChildAvatar} positionLeft="-50%"></Avatar>
            </div>
          </Col>
        </Row>
      </Container>
    </ContentPage>
  );
}

export default PublicPrivateContentView;
