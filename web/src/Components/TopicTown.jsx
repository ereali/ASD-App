import React from "react";
import styled from "styled-components";
import Label from "./Label.jsx";
import { Image } from "react-bootstrap";

function TopicTown(props) {
  // props are imageLink, labelText, onClick?
  return (
    <div>
      <Label
        name={props.labelText}
        backgroundColor="green"
        textColor="#000000"
      />

      <Image src={props.imageLink} />
    </div>
  );
}

export default TopicTown;
