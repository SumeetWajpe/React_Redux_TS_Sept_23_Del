import React, { useState } from "react";
import OutputMessage from "./outputMessage";

export default function InputMessage() {
  const [theMessage, setTheMessage] = useState("");
  return (
    <div>
      <label>
        Enter message here :{" "}
        <input type="text" onChange={e => setTheMessage(e.target.value)} />{" "}
      </label>
      <OutputMessage message={theMessage} />
    </div>
  );
}
