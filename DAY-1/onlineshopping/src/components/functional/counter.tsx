import React, { useState } from "react";

// export default function Counter() {
//   let [count, setCount] = useState(10);
//   let [age, setAge] = useState(18);
//   return (
//     <div>
//       <h4>Count : {count}</h4>
//       <button onClick={() => setCount(count + 10)}>Count++</button>
//       <hr />
//       <h4>Age : {age}</h4>
//       <button onClick={() => setAge(age + 1)}>Age++</button>
//     </div>
//   );
// }
export default function Counter() {
  let [stateData, setStateData] = useState({ count: 10, age: 18 });

  return (
    <div>
      <h4>Count : {stateData.count}</h4>
      <button
        onClick={() =>
          setStateData({ ...stateData, count: stateData.count + 10 })
        }
      >
        Count++
      </button>
      <hr />
      <h4>Age : {stateData.age}</h4>
      <button
        onClick={() => setStateData({ ...stateData, age: stateData.age + 1 })}
      >
        Age++
      </button>
    </div>
  );
}
