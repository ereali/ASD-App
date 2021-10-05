import React from "react";
import styled from "styled-components";

function Label(props) {
  const Label = styled.div`
    background-color: ${props.backgroundColor};
    color: ${props.textColor};
    borderradius: 17px;
    text-align: center;
    vertical-align: center;
    display: inline-flex;
    flex-direction: row;
    padding: 15px;
    font-size: 50px;
    margin: 10px;
  `;

  return <Label>{props.name}</Label>;
}

export default Label;
