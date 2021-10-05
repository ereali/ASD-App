import React from "react";
import styled from "styled-components";
import React from "react";
import styled from "styled-components";

function TextField(props) {
  const field = styled.text`
    background-color: ${props.color};
    borderradius: radius;
    color: ${props.textColor};
    transition: ease background-color 200ms;
    &:hover {
      background-color: #564f1f;
    }
  `;

  return <text onChange={props.onChange}>{props.children}</text>;
}
export default text;
