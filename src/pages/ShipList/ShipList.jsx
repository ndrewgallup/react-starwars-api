import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getShipList } from '../../services/sw-api';

const ShipList = (props) => {
  const [ships, setShips] = useState([])

  useEffect(()=> {
    getShipList()
    .then(shipData => setShips(shipData.results))
  }, [])

  return (
    <>
    
      <h3>Starship List</h3>
        {ShipList.length ?
        <>
        <div className='icon-container'>
          {ships.map((ship) => (
            <Link key={ship.name}
            to='/ship-details' 
            state={{ ship }}
            >
              <div id='classDiv'>
                {ship.name}
              </div>
            </Link>
            
          ))}
        </div>
        </>
        :
        <>
        <h2>Loading starships...</h2>
        </>}
    </>
  );
}

export default ShipList;

