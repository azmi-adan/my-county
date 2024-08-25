import React, { useState, useEffect } from 'react';

const FacilityDetails = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/county')
      .then((response) => response.json())
      .then((data) => setFacilities(data.facilities)); // Access the correct array
  }, []);

  return (
    <div className="facility-details">
      <h2>Facilities in Garissa</h2>
      <ul>
        {facilities.map((facility) => (
          <li key={facility.id}>
            <h3>{facility.name} ({facility.type})</h3>
            <p>{facility.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacilityDetails;
