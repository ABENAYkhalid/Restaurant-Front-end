import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VilleList = ({ onCitySelect }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    axios.get('/api/villes')
      .then(response => {
        setCities(response.data);
      });
  }, []);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    
  };

  return (
    <div>
      <label htmlFor="city">Select a City:</label>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <select
              id="city"
              className="form-select"
              aria-label="Default select example"
              onChange={handleCityChange}
              value={selectedCity}
            >
              <option value="">-- Select a City --</option>
              {cities.map((city) => (
                <option key={city.id} value={city.nom}>
                  {city.nom}
                </option>
              ))}
            </select>
            {selectedCity && <p>Vous avez sélectionné {selectedCity}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VilleList;