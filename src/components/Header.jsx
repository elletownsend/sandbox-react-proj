import search from '../assets/images/search.svg'

import './styles/Header.css'

const Header = (props) => {
    return (
        <div className="header_wrapper">
            <form action="" onSubmit={props.handleSubmit}>
                <h1>lorem ipsum.</h1>
                <p className="header-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto pariatur illum quos eligendi voluptate totam!</p>

                <div className="search_wrapper">
                    <input className="search" type="text" name="search" placeholder="Search..." onChange={props.handleChange} />
                    <button className="search_btn" onClick={props.handleSubmit}><img src={search} alt="Search Icon" /></button>
                </div>
            </form>
        </div>
    );
}

export default Header;