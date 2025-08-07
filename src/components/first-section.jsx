import React from "react";
import Number from "./number";

import "../styles/first-section.css";

function FirstSection() {
  return (
    <section className="first-section">
      <h2>Welcome to my website!</h2>
      <p>
        You can change this number right down.
        By clicking the buttons below.
      </p>
      <Number initialValue={-4} />
    </section>
  );
}

export default FirstSection;