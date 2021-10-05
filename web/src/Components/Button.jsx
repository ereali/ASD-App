import React from "react";
import styled from 'styled-components';

  
function Button(props){ 
const Button = styled.button`
background-color:${props.color};
borderRadius: radius;
color:${props.textColor};
transition: ease background-color 250ms;
&:hover {
 background-color: #cf75c5;    //thx edward
;}
height: ${props.height};
width: $(props.width);
margin: $(props.margin);
border-radius: $(props.borderradius);
padding: $(props.padding);
font-size:50px;
font-family: Monospace;     //ideally hardcoded
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
