import React from "react";
import styled from "styled-components";

function Button(props) {
  const StyledButton = styled.button`
    background-color: ${props.color};
    borderradius: radius;
    color: ${props.textColor};
    transition: ease background-color 250ms;
    &:hover {
      background-color: #cf75c5;
    }
  `;

  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}
export default Button;
