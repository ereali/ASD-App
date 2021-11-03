import React from "react";
import styled from "styled-components";

const Label = (props) => {
  const { name, backgroundColor, textColor, fontWeight, fontSize } = props;
  /*
  Label props are name: the text displayed
  backgroundColor: the color of the label
  textColor: the color of the text displayed
  fontWeight: the weight of the font, ex: bold
  */

  const Label = styled.div`
    background-color: ${props.backgroundColor};
    color: ${props.textColor};
    border-radius: 17px;
    text-align: center;
    vertical-align: center;
    display: inline-block;
    padding: 15px;
    font-size: ${props.fontSize};
    margin: auto;
  `;

  return <Label>{props.name}</Label>;
};

export default Label;
