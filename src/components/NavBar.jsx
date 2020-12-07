import { BrowserRouter, NavLink } from 'react-router-dom'

import logo from '../assets/images/SANDBOX.svg'
import menu from '../assets/images/menu.svg'
import search from '../assets/images/search.svg'
import toggle from '../assets/images/moon.svg'

import './styles/NavBar.css'

const NavBar = () => {
    return (
        <BrowserRouter>
            <nav>
                <span className="logo">
                    <img src={logo} alt="Sandbox Logo" />
                </span>
                <ul className="nav centre">
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore">Explore</NavLink>
                    </li>
                </ul>

                <ul className="nav right">
                    <li className="nav-icon_search">
                        <span>
                            <img src={search} alt="Search Icon" />
                        </span>
                    </li>
                    <li className="nav-icon_menu">
                        <span>
                            <img src={menu} alt="Menu Icon" />
                        </span>
                    </li>
                    <li className="nav-icon_toggle">
                        <span>
                            <img src={toggle} alt="Dark Mode Toggle Icon" />
                        </span>
                    </li>
                </ul>
            </nav>
        </BrowserRouter>
    );
}

export default NavBar;