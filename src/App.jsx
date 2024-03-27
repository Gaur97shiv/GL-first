import React from 'react';
import Home from './Pages/Home/Home';
import Automation from "./Components/image/Automation.jpg"
import GlobalLogic from "./Components/image/img1.jpg"
import Hospitality from "./Components/image/Hospitality.jpg"
import Banking from "./Components/image/Banking.jpg"
import technology from "./Components/image/technology.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Call2 from './Pages/Home/Call2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  exact element={<Home  image={GlobalLogic}/>} />
        <Route path="/Automation" element={<Home Iconname="Automation" image={Automation}/>} />
        <Route path="/banking" element={<Home  Iconname="Banking" image={Banking}/>} />
        <Route path="/tech" element={<Home  Iconname="Technology" image={technology}/>} />
        <Route path="/hospitality" element={<Home Iconname="Hospitality" image={Hospitality}/>} />
        <Route path="/call2" element={<Call2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
