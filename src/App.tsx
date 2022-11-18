import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import CadastroCategoria from "./components/categorias/cadastroCategoria/CadastroCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import ListaPostagem from "./components/postagens/listaPostagem/ListaPostagem";
import Footer from "./components/statics/footer/Footer";
import Navbar from "./components/statics/navbar/Navbar";
import CadastroUsuario from "./paginas/cadastrar/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />

        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path= "/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path= "/formularioCategoria" element={<CadastroCategoria />} />
            <Route path= "/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path= "/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path= "/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>

        <Footer />

      </Router>
    </Provider>
  );
}

export default App;
