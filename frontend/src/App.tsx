import React, { useState, useEffect } from "react";
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

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<{
    id: number;
    indicator: string;
    section: string;
    definition: string;
    unitCode: string;
    unit: string;
    choices: string;
    value: string;
    notAvailable: string;
    currentComments: string;
    newComment: string;
    conditionalityRule: string;
  }[]>([]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/form/submit", formData, {
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

  const handleSearch = async () => {
    try {
      const response = await axios.get("/indicators", {
        params: {
          keywords: searchKeyword
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching indicators:", error);
    }
  };

  useEffect(() => {
    const fetchIndicators = async () => {
      try {
        const response = await axios.get("/indicators");
        const resultsWithIds = response.data.map((result: any, index: number) => ({
          id: result.indicator.id, 
          indicator: result.indicator,
        }));
        setSearchResults(resultsWithIds);
      } catch (error) {
        console.error("Error fetching indicators:", error);
      }
    };

    fetchIndicators();
  }, []);

  const filteredResults = searchResults.filter((result) =>
    result.indicator.toLowerCase().includes(searchKeyword.toLowerCase())
    ).map((result) => ({
      id: result.id,
      indicator: result.indicator,
      section: result.section,
      definition: result.definition,
      unitCode: result.unitCode,
      unit: result.unit,
      choices: result.choices,
      value: result.value,
      notAvailable: result.notAvailable,
      currentComments: result.currentComments,
      newComment: result.newComment,
      conditionalityRule: result.conditionalityRule,
    }));

  return (
    <div className="App">
      <header className="App-header">        
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
        <div>
          <h2>Search Indicators</h2>
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="SearchResults">
          <h2>Search Results</h2>
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <div key={result.id} className="SearchResultsItem">
                <h3>Section: {result.section}</h3>
                <p>Indicator: {result.indicator}</p>
                <p>Definition: {result.definition}</p>
                <p>Unit Code: {result.unitCode}</p>
                <p>Unit: {result.unit}</p>
                <p>Choices: {result.choices}</p>
                <p>Value: {result.value}</p>
                <p>Not Available: {result.notAvailable}</p>
                <p>Current Comments: {result.currentComments}</p>
                <p>New Comment: {result.newComment}</p>
                <p>Conditionality Rule: {result.conditionalityRule}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
