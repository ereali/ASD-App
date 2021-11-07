import React, { useState } from "react";

import Label from "../TopicTown/Label.jsx";

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
