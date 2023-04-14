import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Soil from './pages/Soil'
import Menu from './components/Menu';
import Ph from './pages/ph';
import WeatherPrediction from './pages/WeatherPrediction'
import StoredData from './pages/StoredData'

function App() {
  return (
    <div>
       <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/soil' element={<Soil/>}></Route>
      <Route path='/Ph' element={<Ph/>}></Route>
      <Route path='/StoredData' element={<StoredData/>}></Route>
      <Route path='/WeatherPrediction' element={<WeatherPrediction/>}></Route>
    </Routes>
    </div>
  )
}

export default App
