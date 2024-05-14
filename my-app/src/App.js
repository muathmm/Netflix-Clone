
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import FavoriteList from'./components/FavList'

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<FavoriteList/>} />
    </Routes>
  </Router>
  )
}

export default App;
