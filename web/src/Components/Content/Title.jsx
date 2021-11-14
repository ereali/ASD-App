import React, { useState } from "react";

import Label from "../TopicTown/Label.jsx";

// Title component creates a Label component that displays text sent to it from the Title's parent component
function Title({ parentToChild }) {
  return (
    <Label
      name={parentToChild}
      textColor="white"
      fontWeight="normal"
      fontSize="2.5vw"
    />
  );
}

export default Title;
