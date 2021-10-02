import React from "react";
import styled from 'styled-components';

  
function Button(props){ 
const Button = styled.button`
background-color:${props.color};
borderRadius: radius;
color:${props.textColor};
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
