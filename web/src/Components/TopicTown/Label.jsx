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
    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: 17px;
    text-align: center;
    vertical-align: center;
    display: inline-block;
    padding: 15px;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    margin: auto;
  `;

  return <Label>{name}</Label>;
};

export default Label;
