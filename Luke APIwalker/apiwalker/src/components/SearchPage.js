import axios from "axios";
import React, { useState } from "react";

const SearchPage = () => {
  const [selectedPath, setSelectedPath] = useState("/people");
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const search = () => {
    setError(null);
    if (selectedPath && id) {
      axios
        .get(`https://swapi.dev/api${selectedPath}/${id}/`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError("Estos no son los droides que está buscando");
          setData(null);
        });
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedPath}
          onChange={(e) => setSelectedPath(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
        >
          <option value={"/people"}>People</option>
          <option value={"/planets"}>Planet</option>
        </select>
        <div style={{ display: "flex" }}>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
          />
          <button
            onClick={() => {
              search();
            }}
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Buscar
          </button>
        </div>
      </div>
      <div>
        {error ? (
          <div>
            <p>{error}</p>
            <img
              src="https://cdn.pixabay.com/photo/2018/03/08/17/12/star-wars-3207419_960_720.png"
              alt="Obi-Wan Kenobi"
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        ) : null}
        {data ? (
          <div>
            <h1>{data.name}</h1>
            <DisplayAttributes attributes={data} />
            {selectedPath === "/people" && data.homeworld && (
              <p>Homeworld: {data.homeworld}</p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;
