import React, { useState } from 'react';
import VilleList from '../VilleList';
import ZoneList from '../ZoneList';

function UserHome() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value);
  };

  const handleSearch = () => {
    // Perform search based on selectedCity, selectedZone, and searchQuery
    // You can add your search logic here
    console.log('Search query:', searchQuery);
  };

  return (
    <div>
    <h1 className="display-4 mt-4">User</h1>

    <div className="row">
      <div className="col">
        <VilleList onCitySelect={handleCityChange} />
      </div>
      <div className="col">
        <ZoneList onZoneSelect={handleZoneChange} />
      </div>
    </div>

    <div className="row mt-3">
      <div className="col">
        <label htmlFor="search">Search Restaurants:</label>
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>


  </div>
  );
}

export default UserHome;