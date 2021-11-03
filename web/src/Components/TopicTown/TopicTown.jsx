import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import Label from "./Label.jsx";

const TopicTown = (props) => {
  const { name, color, imageLink, url } = props;
  /*  
  TopicTown props are name: text displayed on Label
  color: Label background color
  imageLink: link to town icon to display under Label
  url: the url used in routing
  */

  const history = useHistory();

  return (
    <div style={{ cursor: "pointer" }} onClick={() => history.push(url)}>
      <Label
        name={props.labelText}
        backgroundColor={props.color}
        textColor="white" // Text color is not changeable. Every TopicTown Label has white text color
        fontWeight="normal" // Font weight is not changeable. Every TopicTown Label has bold font weight
        fontSize="2.5vw"
      />
      <Image style={{ width: "100%" }} src={props.imageLink} />
    </div>
  );
};

export default TopicTown;
