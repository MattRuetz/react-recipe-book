import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
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
