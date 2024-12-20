import '../App.css'

const StarshipCard = ({ starship }) => {
  return (
    <section>
      <h4>{starship.name}</h4>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
    </section>
  )
}

export default StarshipCard