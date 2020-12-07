import search from '../assets/images/search.svg'

import './styles/Header.css'

const Header = () => {
    return (
        <div className="header_wrapper">
            <h1>lorem ipsum.</h1>
            <p className="header-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto pariatur illum quos eligendi voluptate totam!</p>

            <div className="search_wrapper">
                <input className="search" type="text" name="search" placeholder="Search..." />
                <button className="search-btn"><img src={search} alt="Search Icon" /></button>
            </div>
        </div>
    );
}

export default Header;