
import HomeScreen from "./componentes/HomeScreen";
import "./App.css";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginRegisterScreen from "./componentes/LoginRegisterScreen";
import RegisterScreen from "./componentes/RegisterScreen";
import Details from "./componentes/Details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomeScreen/>}/>
        <Route path="LoginOrRegister" exact element={<LoginRegisterScreen/>}/>
        <Route path="Register" exact element={<RegisterScreen/>}/>
        <Route path="ProductDetails" exact element={<Details/>}/>
      </Routes>
      {/* <HomeScreen/> */}
    </div>
  );
}

export default App;
