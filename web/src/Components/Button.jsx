import React from "react";
import styled from "styled-components";

function Button(props) {
  const Button = styled.button`
    background-color: ${props.color};
    borderradius: radius;
    color: ${props.textColor};
    transition: ease background-color 250ms;
    &:hover {
      background-color: #1c73ff; //thx Marcos
    }
  `;

  return (
    <Button 
     onClick = {props.onClick} 
    >
{props.children} 
    </Button>
  );
}
export default Button;
