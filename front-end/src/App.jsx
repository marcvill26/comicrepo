import React from "react";
import NavBar from "./components/NavBar/NavBar";

import Home from "../src/pages/Home/Home";
import Marvelcomics from "../src/pages/Marvelcomics/Marvelcomics";
import DcComics from "../src/pages/DcComics/DcComics";
import Shop from "../src/pages/Shop/Shop";
import Register from "../src/pages/Register/Register";
import Footer from "./components/Footer/Footer";
import AdminPageComics from "./pages/AdminPageComics/AdminPageComics";
import AdminPageShop from "./pages/shopAdmin/shopAdmin";
import Search from "./components/Search/Search";
import { paths } from "./constants";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

const { home, marvelComics, dcComics, shop, register, admin, adminShop } =
  paths;

function App() {
  return (
    <Router>
      <NavBar />
      <Search />
      <div className="App">
        <Routes>
          <Route path={home.url}></Route>
          <Route path={marvelComics.url} element={<Marvelcomics />}></Route>
          <Route path={dcComics.url} element={<DcComics />}></Route>
          <Route path={shop.url} element={<Shop />}></Route>
          <Route path={register.url} element={<Register />}></Route>
          <Route path={admin.url} element={<AdminPageComics />}></Route>
          <Route path={adminShop.url} element={<AdminPageShop />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
