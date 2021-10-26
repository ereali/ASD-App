import React from "react";
import styled from "styled-components";
import Label from "./Label.jsx";
import { Image } from "react-bootstrap";

const TopicTown = (props) => {
  const { name, color, imageLink } = props;
  // props are imageLink, labelText, onClick?
  return (
    <div>
      <Label
        name={props.labelText}
        backgroundColor={props.color}
        textColor="white"
        fontWeight="bold"
      />
      <Image src={props.imageLink} />
    </div>
  );
};

export default TopicTown;
