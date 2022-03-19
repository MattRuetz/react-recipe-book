import { Link } from 'react-router-dom';

// hooks
import { useTheme } from '../hooks/useTheme';
// Styles
import './Navbar.css';
// Components
import SearchBar from './SearchBar';

function Navbar() {
    const { color } = useTheme(); //useTheme --> useContext(ThemeContext)

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
