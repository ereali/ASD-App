import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function QuizButton(props) {
  const history = useHistory();
  const QuizButton = styled.div`
    name: ${props.name};
    background-color: ${props.backgroundColor};
    color: ${props.textColor};
    padding: 5px 15px;
    border-radius: 17px;
    outline: 0;
    margin: 1vw 0px;
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

  return (
    <QuizButton onClick={() => history.goBack()}>{props.content}</QuizButton>
  );
}

export default QuizButton;
