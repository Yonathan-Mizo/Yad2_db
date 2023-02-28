const CarDetails = ({ car }) => {

    return (
      <div className="workout-details">
        <image className="workout-details-photo">{car.images}</image>
        <h4>{car.name}</h4>
        <p><strong>{car.info}</strong></p>
        <p><strong>Price: </strong>{car.price}</p>
        <p><strong>Year: </strong>{car.year}</p>
        <p><strong>Hand: </strong>{car.hand}</p>
        <p><strong>Description: </strong>{car.description}</p>
        <p><strong>contact: </strong>{car.user.uname}{car.user.contact}</p>
        <p><strong>contact: </strong>{car.user.contact}</p>
      </div>
    )
  }
  
  export default CarDetails