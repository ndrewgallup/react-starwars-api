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
    <div>
   
      <div className="icon-container">
      {ships.length ?
      <>
        {ships.map((ship) => (
          <Link
          to='/ship-details'
          state={{ship}}
          style={{textDecoration: 'none'}}
          >
            <div key={ship.name} id='classDiv'>
              {ship.name}
            </div>
          </Link>
        ))}
      </>
      :
      <>
        <p>Loading starship list...</p>
      </>
      }
      </div>
    </div>
  </>
)
}

export default ShipList;

