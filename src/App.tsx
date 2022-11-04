import React from "react";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Cadastrar from "./paginas/cadastrar/Cadastrar";
import Navbar from "./components/statics/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/cadastrar' element={<Cadastrar />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
