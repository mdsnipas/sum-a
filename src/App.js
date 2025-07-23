import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (!isNaN(val1) && !isNaN(val2)) {
      setSum(val1 + val2);
    } else {
      setSum("Invalid input");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Sum of Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={handleSum}>Add</button>
      <h3>Result: {sum !== null ? sum : "--"}</h3>
    </div>
  );
}

export default App;
