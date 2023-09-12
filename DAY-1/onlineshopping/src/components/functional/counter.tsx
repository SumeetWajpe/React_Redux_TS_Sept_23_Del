import React, { useState } from "react";

export default function Counter() {
  let [count] = useState(10);
  return (
    <div>
      <h4>{count}</h4>
      <button>++</button>
    </div>
  );
}
