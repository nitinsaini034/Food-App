import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from './Component/Home';
import Burger from './Component/Burger';
import Pizza from './Component/Pizza'
import Pasta from './Component/Pasta'
import Steaks from './Component/Steaks'
import Salads from './Component/Salads'
import Deserts from './Component/Deserts'
import Drinks from './Component/Drinks'

function App() {
  return (
      <Router>
      <div>        
        <Routes>          
          <Route path='/' element={<Home/>}/>
          <Route path='/Burger' element={<Burger/>}/>
          <Route path='/Pizza' element={<Pizza/>}/>
          <Route path='/Pasta' element={<Pasta/>}/>
          <Route path='/Steaks' element={<Steaks/>}/>
          <Route path='/Salads' element={<Salads/>}/>
          <Route path='/Deserts' element={<Deserts/>}/>
          <Route path='/Drinks' element={<Drinks/>}/>
        </Routes>
      </div>      
    </Router>
  )
}

export default App
