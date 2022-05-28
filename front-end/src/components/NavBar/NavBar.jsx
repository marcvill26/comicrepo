import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants";

const { home, marvelComics, dcComics, shop, register, admin, adminShop } =
  paths;

const Navbar = () => {
  return (
    <nav className="menu">
      <Link to={home.url} className="menu__link">
        {home.name}
      </Link>
      <Link to={marvelComics.url} className="menu__link">
        {marvelComics.name}
      </Link>
      <Link to={dcComics.url} className="menu__link menu__link--dc">
        {dcComics.name}
      </Link>
      <Link to={shop.url} className="menu__link">
        {shop.name}
      </Link>
      <Link to={register.url} className="menu__link">
        {register.name}
      </Link>
      <Link to={admin.url} className="menu__link">
        {admin.name}
      </Link>
      <Link to={adminShop.url} className="menu__link">
        {adminShop.name}
      </Link>
    </nav>
  );
};

export default Navbar;
