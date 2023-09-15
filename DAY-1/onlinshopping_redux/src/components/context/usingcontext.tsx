import { count } from "console";
import React, { createContext, useContext, useState } from "react";
type CounterContextData = {
  count: number;
  increment?: () => void;
};

let CounterContext = createContext<CounterContextData>({
  count: 0,
  increment: function () {},
});

export default function GrandParent() {
  let [data, setData] = useState(10);

  return (
    <CounterContext.Provider
      value={{
        count: data,
        increment: () => {
          setData(data + 1);
        },
      }}
    >
      <Parent />
    </CounterContext.Provider>
  );
}

export function Parent() {
  return (
    <CounterContext.Provider
      value={{
        count: 100,
      }}
    >
      <Child />
      <AnotherChild />
    </CounterContext.Provider>
  );
}

// Preferred Way
export function Child() {
  const ctx = useContext(CounterContext); // consumer
  return (
    <div>
      <h3>Count : {ctx.count}</h3>
      <button onClick={() => ctx?.increment?.()}>++</button>
    </div>
  );
}

export function AnotherChild() {
  return (
    <CounterContext.Consumer>
      {value => (
        <div>
          <h3>Count : {value.count} (Another Child)</h3>
        </div>
      )}
    </CounterContext.Consumer>
  );
}
