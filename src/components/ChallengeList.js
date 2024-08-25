import React, { useState, useEffect } from 'react';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/county')
      .then((response) => response.json())
      .then((data) => setChallenges(data.challenges)); // Access the correct array
  }, []);

  return (
    <div className="challenge-list">
      <h2>Challenges Facing Garissa</h2>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <h3>{challenge.name}</h3>
            <p>{challenge.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeList;
