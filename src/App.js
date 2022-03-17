import { Route, Routes } from 'react-router-dom'
import ShipList from './pages/ShipList/ShipList';
import ShipDetails from './pages/ShipDetails/ShipDetails';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import './App.css';


function App() {
  const [navItems, setNavItems] = useState([{name: "STAR WARS STARSHIPS"}])
  return (
    <>
    <NavBar navItems={navItems} />
      <Routes>
        <Route path='/' element= {<ShipList/>} />
        <Route path='/ship-details' element={<ShipDetails/>} />
      </Routes>
    </>
  );

}
export default App;
