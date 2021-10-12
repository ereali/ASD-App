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

  function QuizButton(props) {
      const QuizButton = styled.div`
        background-color: ${props.backgroundColor};
        color: ${props.textColor};
        padding: 5px 15px;
        border-radius: 17px;
        outline: 0;
        margin: 10px 0px;
        cursor: pointer;
        box-shadow: 0px 2px 2px lightgray;
        transition: ease background-color 250ms;
        font-size: ${props.fontSize};
        &:hover {
        background-color: ${props.hoverBackgroundColor};
        }
        &:disabled {
        cursor: default;
        opacity: 0.7;
        }
      `;

      return <QuizButton>(props.name)</QuizButton>;
  }
  
  export default QuizButton;
  export default Label;