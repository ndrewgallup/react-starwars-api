import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const ShipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.ship.url)
    .then(shipDetails => setShipDetails(shipDetails))
  }, [])

  return (
    <>
      <h3>{shipDetails.name}</h3>
      <div className='detail-card'>
        
        <p>Model: {shipDetails.model}</p>
        <p>Length: {shipDetails.length} m</p>
        <p>Crew: {shipDetails.crew}</p>
      
        <Link 
        to='/'
        
        >
        Return
        </Link><br />
      </div>
    </>
  );
}

export default ShipDetails;