import React from "react";
import styled from "styled-components";
import Label from "./Label.jsx";
import { Image } from "react-bootstrap";

const TopicTown = (props) => {
  const { name, color, imageLink } = props;
  /*  TopicTown props are name (written on Label)
      color (Label background color)
      imageLink (link to town icon)
      onClick (makes the entire TopicTown into a clickable button that leads to OnClick)
  */
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
