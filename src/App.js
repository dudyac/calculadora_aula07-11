import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      setInput("");
    } catch {
      setResult("Erro");
    }
  };

  const clear = () => {
    setInput("");
    setResult(null);
  };

  const handleSquareRoot = () => {
    setResult(Math.sqrt(parseFloat(input)));
    setInput("");
  };

  const handleSin = () => {
    setResult(Math.sin(parseFloat(input)));
    setInput("");
  };

  const handleCos = () => {
    setResult(Math.cos(parseFloat(input)));
    setInput("");
  };

  const convertToCelsius = () => {
    setResult(((parseFloat(input) - 32) * 5) / 9);
    setInput("");
  };

  const convertToFahrenheit = () => {
    setResult((parseFloat(input) * 9) / 5 + 32);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <h2>Calculadora</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o valor"
        style={styles.input}
      />
      <div style={styles.buttonsContainer}>
        <div style={styles.buttonColumn}>
          <button style={styles.button} onClick={() => handleButtonClick("1")}>1</button>
          <button style={styles.button} onClick={() => handleButtonClick("4")}>4</button>
          <button style={styles.button} onClick={() => handleButtonClick("7")}>7</button>
          <button style={styles.button} onClick={clear}>C</button>
          <button style={styles.button} onClick={handleSquareRoot}>√</button>
          <button style={styles.button} onClick={convertToCelsius}>°F to °C</button>
        </div>
        <div style={styles.buttonColumn}>
          <button style={styles.button} onClick={() => handleButtonClick("2")}>2</button>
          <button style={styles.button} onClick={() => handleButtonClick("5")}>5</button>
          <button style={styles.button} onClick={() => handleButtonClick("8")}>8</button>
          <button style={styles.button} onClick={() => handleButtonClick("0")}>0</button>
          <button style={styles.button} onClick={handleSin}>sin</button>
        </div>
        <div style={styles.buttonColumn}>
          <button style={styles.button} onClick={() => handleButtonClick("3")}>3</button>
          <button style={styles.button} onClick={() => handleButtonClick("6")}>6</button>
          <button style={styles.button} onClick={() => handleButtonClick("9")}>9</button>
          <button style={styles.button} onClick={calculate}>=</button>
          <button style={styles.button} onClick={handleCos}>cos</button>
          <button style={styles.button} onClick={convertToFahrenheit}>°C to °F</button>
        </div>
        <div style={styles.buttonColumn}>
          <button style={styles.button} onClick={() => handleButtonClick("+")}>+</button>
          <button style={styles.button} onClick={() => handleButtonClick("-")}>-</button>
          <button style={styles.button} onClick={() => handleButtonClick("*")}>*</button>
          <button style={styles.button} onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
      <h3>Resultado: {result !== null ? result : "Insira uma operação"}</h3>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  input: {
    width: "200px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  buttonColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#7FFFD4",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
