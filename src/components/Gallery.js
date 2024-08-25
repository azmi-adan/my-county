import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/county')
      .then((response) => response.json())
      .then((data) => setGallery(data.gallery)) // Access the correct array
      .catch((error) => console.error('Error fetching the gallery data:', error));
  }, []);

  return (
    <div className="gallery">
      <h2>Gallery of Garissa</h2>
      <div className="gallery-images">
        {gallery.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.imageUrl} alt={image.description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
