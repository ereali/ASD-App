import React from "react";
import styled from "styled-components";

function Button(props) {
  const Button = styled.button`
    background-color: ${props.color};
    borderradius: radius;
    color: ${props.textColor};
    transition: ease background-color 250ms;
    &:hover {
      //background-color: #cf75c5;    //thx edward
      filter: brightness(1.4);
      transition: ease 250ms;
    }
    height: ${props.height};
    width: ${props.width};
    margin: $(props.margin);
    border-radius: ${props.borderradius};
    font-size: ${props.fontsize};
  `;

  return <Button onClick={props.onClick}>{props.children}</Button>;
}
export default Button;
