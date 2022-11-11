import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./components/register/register";
import Signin from "./components/signin/signin";


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/reg" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
