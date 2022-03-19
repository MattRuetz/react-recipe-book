import { Link } from 'react-router-dom';
import { useContext } from 'react';
// Styles
import './Navbar.css';
// Components
import { ThemeContext } from '../context/ThemeContext';
import SearchBar from './SearchBar';

function Navbar() {
    const { color } = useContext(ThemeContext);

    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </Link>
                <SearchBar />
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    );
}

export default Navbar;
