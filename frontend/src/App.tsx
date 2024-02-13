import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  const [formData, setFormData] = useState({
    section: "",
    indicator: "",
    definition: "",
    unitCode: "",
    unit: "",
    choices: "",
    value: "",
    notAvailable: "",
    currentComments: "",
    newComment: "",
    conditionalityRule: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("FormData at the frontend", formData)
      await axios.post("/submitForm", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <h2>User Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Section:</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Indicator:</label>
              <input
                type="text"
                name="indicator"
                value={formData.indicator}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Definition:</label>
              <input
                type="text"
                name="definition"
                value={formData.definition}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Unit Code:</label>
              <input
                type="text"
                name="unitCode"
                value={formData.unitCode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Unit:</label>
              <input
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Choices:</label>
              <input
                type="text"
                name="choices"
                value={formData.choices}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Value:</label>
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Not Available:</label>
              <input
                type="text"
                name="notAvailable"
                value={formData.notAvailable}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Current Comments:</label>
              <input
                type="text"
                name="currentComments"
                value={formData.currentComments}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>New Comment:</label>
              <input
                type="text"
                name="newComment"
                value={formData.newComment}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Conditionality Rule:</label>
              <input
                type="text"
                name="conditionalityRule"
                value={formData.conditionalityRule}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
