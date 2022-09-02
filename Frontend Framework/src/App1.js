
import { useState } from "react";
import './index.css';

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Under weight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Healthy weight";
    else if (bmi >= 25 && bmi < 29.9) return "Over weight";
    else return "Obese";
  }

  return (
    <div className="">
      <form className="container1">
        <div className="header">
        <h1 className=""> BMI Calculator</h1></div>
        <div className="container2">
          <label
            className=""
            for="username"
          >
            Enter your height in cm :
            <br/>
          </label>
          <input
            className="text"
            id="Height "
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className=""
            for="password"
          >
            Enter your weight in kg :
            <br/>
          </label>
          <input
            className="text"
            id="Weight"
            type="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="container6">
          <button
            className="submit"
            type="button"
            onClick={calculateBMI}
          >
            Submit
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>Your suggested weight range is between 50 - 67</p>
            <p>You are in a {status} range</p>
          </div>
        )}
      </form>
    </div>
  );
}