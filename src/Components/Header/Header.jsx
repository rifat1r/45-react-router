import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>My Website</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Post</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contuct Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;