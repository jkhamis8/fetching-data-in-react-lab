import { useState } from 'react'
import { useEffect } from 'react'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import * as starshipService from './services/starshipService';
import './App.css'

const App = () => {
  const [starships, setStarships] = useState([]);
  const [total, setTotal] = useState(0)
  
  const fetchData = async (ship) => {
    const data = await starshipService.show(ship);
    const newstarships = {
      results: data.results,
      total: data.count
    };
    setStarships(newstarships.results);
    setTotal(newstarships.count);
  };
  
  useEffect(() => {
    fetchData('')
  }, []);

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} total={total} />
    </main>
  );
};

export default App;