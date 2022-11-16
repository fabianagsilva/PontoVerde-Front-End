import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/statics/footer/Footer";
import Navbar from "./components/statics/navbar/Navbar";
import CadastroUsuario from "./paginas/cadastrar/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
          </Routes>
        </div>

        <Footer />

      </Router>
    </Provider>
  );
}

export default App;
