import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(10);
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>++</button>
    </div>
  );
}
