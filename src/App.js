import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useTheme } from './hooks/useTheme';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

function App() {
    const { mode } = useTheme();

    return (
        <div className={`App ${mode}`}>
            <Router>
                <Navbar />
                <ThemeSelector />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/recipes/:id" element={<Recipe />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={<h1>404: NOT FOUND</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
