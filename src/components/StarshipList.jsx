import '../App.css'
import StarshipCard from './StarshipCard'

const StarshipList = (props) => {
    return (
      <section>
        <h2>Starships</h2>
        <p>Number of results: {props.total}</p>
        <ul>
          {props.starships.map((starship) => (
            <li key={starship.name}>
              <StarshipCard starship={starship} />
            </li>
          ))}
        </ul>
      </section>
    )
  }
  
  export default StarshipList