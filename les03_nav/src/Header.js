import { NavLink } from "react-router-dom";
// SPA => Link to или использовать NavLink это для подсветки т к появляется класс activ
function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Users">Users</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;