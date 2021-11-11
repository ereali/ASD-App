import { Image } from "react-bootstrap";
import { React, useState } from "react";

import Label from "../TopicTown/Label";
import Avatar from "./Avatar";

import ChildAvatar from "../../Resources/Content/ChildAvatar.png";

const Location = (props, parentToChild, changeVisiting) => {
  parentToChild = props.titleFunction;
  changeVisiting = props.visitingFunction;
  var opacity = 0;

  if (props.visiting == props.locationName) {
    opacity = 1;
  }

  return (
    <div
      style={{
        cursor: "pointer",
        marginBottom: "50px",
        position: "relative",
      }}
      onClick={() => {
        parentToChild(props.locationName, props.locationType); // when clicked, this div updates the string displayed in the Title component
        changeVisiting(props.locationName);
      }}
    >
      <Label
        backgroundColor="#488B49"
        name={props.locationName}
        textColor="white"
        fontWeight="normal"
        fontSize="1.9vw"
      />
      <Image style={{ width: "12vw" }} src={props.image} />
      <Avatar
        src={ChildAvatar}
        positionLeft={props.positionLeft}
        opacity={opacity}
      ></Avatar>
    </div>
  );
};

export default Location;
