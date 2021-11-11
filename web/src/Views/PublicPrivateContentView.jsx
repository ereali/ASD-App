import { React, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "../Components/Content/Title";
import Button from "../Components/Button";
import Location from "../Components/Content/Location";

// Location Icons
import BookIcon from "../Resources/Content/BookIcon.svg";
import SchoolIcon from "../Resources/Content/SchoolIcon.svg";
import ToiletIcon from "../Resources/Content/ToiletIcon.svg";
import TreeIcon from "../Resources/Content/TreeIcon.svg";

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

  const [visiting, setVisiting] = useState("");

  var place = "";
  var placeType = "";
  const history = useHistory();

  // parentToChild function takes place and placeType as parameters to set and pass a string to display in a Title component
  const parentToChild = (place, placeType) => {
    setData(place + " is a " + placeType + " place.");
  };

  const changeVisiting = (place) => {
    setVisiting(place);
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

      {/* Locations */}
      <Container fluid>
        <Row>
          <Col md={2}>
            <Location
              locationName="School"
              locationType="public"
              image={SchoolIcon}
              titleFunction={parentToChild}
              visiting={visiting}
              visitingFunction={changeVisiting}
              positionLeft="60%"
            />
          </Col>
          <Col md={{ span: 2, offset: 3 }}></Col> {/*Spacing column*/}
          <Col md={{ span: 2, offset: 3 }}>
            <Location
              locationName="The park"
              locationType="public"
              image={TreeIcon}
              titleFunction={parentToChild}
              visiting={visiting}
              visitingFunction={changeVisiting}
              positionLeft="-50%"
            />
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <Location
              locationName="Your bathroom"
              locationType="private"
              image={ToiletIcon}
              titleFunction={parentToChild}
              visiting={visiting}
              visitingFunction={changeVisiting}
              positionLeft="60%"
            />
          </Col>
          <Col md={{ span: 2, offset: 3 }}></Col> {/*Spacing column*/}
          <Col md={{ span: 2, offset: 3 }}>
            <Location
              locationName="The library"
              locationType="public"
              image={BookIcon}
              titleFunction={parentToChild}
              visiting={visiting}
              visitingFunction={changeVisiting}
              positionLeft="-50%"
            />
          </Col>
        </Row>
      </Container>
    </ContentPage>
  );
}

export default PublicPrivateContentView;
