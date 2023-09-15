import React, { createContext, useContext, useState } from "react";

let CounterContext = createContext(0);

export default function GrandParent() {
  let [counter] = useState(0);
  return (
    <CounterContext.Provider value={counter}>
      <Parent />
    </CounterContext.Provider>
  );
}

export function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

export function Child() {
  const ctx = useContext(CounterContext);// consumer
  return (
    <div>
      <h3>Count : {ctx}</h3>
    </div>
  );
}
