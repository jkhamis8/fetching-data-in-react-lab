import { useState } from 'react';

const StarshipSearch = (props) => {
  const [ship, setShip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(ship)
    setShip('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ship">Enter a ship number:</label>
        <input
          id="ship"
          type="text"
          value={ship}
          onChange={(e) => setShip(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;