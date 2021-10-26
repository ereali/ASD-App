import _default from "@restart/ui/esm/Nav";
import React from "react";
import styled from "styled-components";
import QuizButton from "./quizbutton";

function clickMe() {
  alert("You clicked me!");
}

function FourButtonModule(props) {
  return (
    <div>
      <div>
        <QuizButton
          name="quizbutton1"
          backgroundColor={props.backgroundColor}
          textColor={props.textColor}
          fontSize={props.fontSize}
          hoverBackgroundColor={props.hoverBackgroundColor}
          content={props.content1}
        />
      </div>
      <div>
        <QuizButton
          name="quizbutton2"
          backgroundColor={props.backgroundColor}
          textColor={props.textColor}
          fontSize={props.fontSize}
          hoverBackgroundColor={props.hoverBackgroundColor}
          content={props.content2}
        />
      </div>
      <div>
        <QuizButton
          name="quizbutton3"
          backgroundColor={props.backgroundColor}
          textColor={props.textColor}
          fontSize={props.fontSize}
          hoverBackgroundColor={props.hoverBackgroundColor}
          content={props.content3}
        />
      </div>
      <div>
        <QuizButton
          name="quizbutton4"
          backgroundColor={props.backgroundColor}
          textColor={props.textColor}
          fontSize={props.fontSize}
          hoverBackgroundColor={props.hoverBackgroundColor}
          content={props.content4}
        />
      </div>
    </div>
  );
}

export default FourButtonModule;
