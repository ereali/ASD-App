import _default from "@restart/ui/esm/Nav";
import React from "react";
import styled from "styled-components";
import QuizButton from "./quizbutton";

function clickMe() {
  alert("You clicked me!");
}

const TrueColor = "#13eb28";
const TrueHoverColor = "#11ab20";
const FalseColor = "#e01814";
const FalseHoverColor = "#9c1210";
const defaultTextColor = "#ffffff";

function TrueFalseModule(props) {
  return (
    <div>
      <div>
        <QuizButton
          name="truebutton"
          backgroundColor={TrueColor}
          textColor={defaultTextColor}
          fontSize={props.fontSize}
          hoverBackgroundColor={TrueHoverColor}
          onClick={clickMe}
          content="True"
        />
      </div>
      <div>
        <QuizButton
          name="truebutton"
          backgroundColor={FalseColor}
          textColor={defaultTextColor}
          fontSize={props.fontSize}
          hoverBackgroundColor={FalseHoverColor}
          onClick={clickMe}
          content="False"
        />
      </div>
    </div>
  );
}

export default TrueFalseModule;
