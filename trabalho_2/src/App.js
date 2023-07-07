
import HomeScreen from "./componentes/HomeScreen";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginRegisterScreen from "./componentes/LoginRegisterScreen";
import RegisterScreen from "./componentes/RegisterScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomeScreen/>}/>
        <Route path="LoginOrRegister" exact element={<LoginRegisterScreen/>}/>
        <Route path="Register" exact element={<RegisterScreen/>}/>
      </Routes>
      {/* <HomeScreen/> */}
    </div>
  );
}

export default App;
