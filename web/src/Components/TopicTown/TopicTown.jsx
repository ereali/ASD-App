import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import Label from "./Label.jsx";

const TopicTown = (props) => {
  const { name, color, imageLink, url } = props;
  /*  
  TopicTown props are 
  name: text displayed on Label
  color: Label background color
  imageLink: link to town icon to display under Label
  url: the url used in routing
  */

  const history = useHistory();

  return (
    // This div encloses the entire Topic Town. It's onClick function sends the user to the page the router specifies using the url prop
    <div style={{ cursor: "pointer" }} onClick={() => history.push(url)}>
      <Label
        name={props.labelText}
        backgroundColor={props.color}
        textColor="white"
        fontSize="2.5vw"
      />
      <Image style={{ width: "100%" }} src={props.imageLink} />{" "}
      {/* under the Label component an image specified in the imageLink prop is displayed*/}
    </div>
  );
};

export default TopicTown;
