import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

function ProgressBarComp(props) {
  return <ProgressBar animated now={props.now} label={`${props.now}%`} />;
}

export default ProgressBarComp;
