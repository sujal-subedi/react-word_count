import { useState } from "react";

function App() {
  const [Count, setCount] = useState("");

  let noc = Count === "" ? "" : Count.length;
  let now = Count.match(/(\w+)/g) || [];
  now = Count === "" ? "" : now.length;

  let nos = Count === "" ? "" : Count.split(" ").length - 1;

  return (
    <>
      <div className="title">
        <h2>Word Count App</h2>
      </div>
      <textarea
        placeholder="Write Here..."
        onChange={(e) => setCount(e.target.value)}
      ></textarea>
      <p>Total number of Character is {noc}</p>
      <p>Total number of Words is {now}</p>
      <p>Total number of Space is {nos}</p>
    </>
  );
}

export default App;
