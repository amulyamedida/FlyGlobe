import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar transparent-navbar">
      <div className="nav-logo">FlyGlobe</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
