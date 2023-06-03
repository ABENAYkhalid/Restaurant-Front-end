import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ZoneList = ({ onZoneSelect }) => {
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState('');

  useEffect(() => {
    axios.get('/api/zones')
      .then(response => {
        setZones(response.data);
      });
  }, []);

  const handleZoneChange = (event) => {
    const selectedZone = event.target.value;
    setSelectedZone(selectedZone);
    onZoneSelect(selectedZone); // Invoke the onZoneSelect function with the selected zone
  };

  return (
    <div>
      <label htmlFor="city">Select a Zone:</label>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <select
              id="city"
              className="form-select"
              aria-label="Default select example"
              onChange={handleZoneChange}
              value={selectedZone}
            >
              <option value="">-- Select a Zone --</option>
              {zones.map((zone) => (
                <option key={zone.id} value={zone.nom}>
                  {zone.nom}
                </option>
              ))}
            </select>
            {selectedZone && <p>Vous avez sélectionné {selectedZone}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneList;
