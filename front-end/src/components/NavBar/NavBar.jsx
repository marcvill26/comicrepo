import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="menu">
            <Link to='/Home' className="menu__link">home</Link>
            <Link to='/Marvelcomics' className="menu__link menu__link--marvel">marvel comics</Link>
            <Link to='/DcComics' className="menu__link menu__link--dc">dc comics</Link>
            <Link to='/Shop' className="menu__link">shop</Link>
            <Link to='/Register' className="menu__link">register</Link>
            <Link to="/Admin" className="menu__link">admin comics</Link>
            <Link to="/AdminShop" className="menu__link">admin shop</Link>
            
        </nav>
    );
}

export default Navbar;
