import React, { useState, useEffect } from 'react';

const FeatureList = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/county')
      .then((response) => response.json())
      .then((data) => setFeatures(data.features)); // Access the correct array
  }, []);

  return (
    <div className="feature-list">
      <h2>Features of Garissa</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
