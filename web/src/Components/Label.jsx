import React from "react";
import styled from "styled-components";

function Label(props) {
  const Label = styled.div`
    background-color: ${props.backgroundColor};
    color: ${props.textColor};
    border-radius: 17px;
    text-align: center;
    vertical-align: center;
    display: inline-block;
    padding: 15px;
    font-size: 40px;
    margin: auto;
  `;

  return <Label>{props.name}</Label>;
}

export default Label;
