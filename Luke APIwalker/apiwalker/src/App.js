import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeResource = (e) => {
    setResource(e.target.value);
    setData(null);
    setError(null);
  };

  const handleChangeId = (e) => {
    setId(e.target.value);
    setData(null);
    setError(null);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError("Estos no son los droides que está buscando");
      setData(null);
    }
  };

  const DisplayAttributes = ({ attributes }) => {
    return (
      <div>
        {Object.entries(attributes).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>
    );
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <label>
          Resource:
          <select value={resource} onChange={handleChangeResource}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
        </label>
        <label>
          ID:
          <input type="number" value={id} onChange={handleChangeId} placeholder="Enter ID" />
        </label>
        <button onClick={handleSubmit}>Get Resource</button>
        {error && <p>{error}</p>}
        {data && (
          <div>
            <h2>{resource} - ID: {id}</h2>
            {resource === "people" && data.homeworld && (
              <p>Homeworld: {data.homeworld}</p>
            )}
            <DisplayAttributes attributes={data} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
