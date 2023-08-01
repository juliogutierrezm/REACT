import axios from "axios";
import React, { useState } from "react";

const SearchPage = (props) => {
  const [selectedPath, setSelectedPath] = useState("/people");
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const search = () => {
    if (selectedPath && id) {
      axios
        .get(`https://swapi.dev/api/${selectedPath}/${id}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        {data ? (
          <pre>
            <h1>{data.name}</h1>
            {Object.keys(data)
              .slice(0, 4)
              .map((key) => (
                <p>
                  {key}: {data[key]}
                </p>
              ))}
            height: {data.height}
          </pre>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;
