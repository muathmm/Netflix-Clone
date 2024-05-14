import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
        <div className="container">
          <Link to="/" className="navbar-brand">  Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
               
              </li>
              <li> <Link to="/favorite" className="nav-link">Favorite Movie</Link></li>
            
            </ul>
          </div>
        </div>
      </nav>
      );
}

export default NavBar;