import { Link } from 'react-router-dom';
import { useState } from "react";
// this is for icons import { Menu, X } from "lucide-react";  but i have used CDN
import '../Navbar/Nav.css';
import logo from '../../assets/logo.jpg';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Nav'>
            <img src={logo} alt="logo image" className="logo" />
            <div className="right-section">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/feedback'>Feedback</Link>
            </div>

            {/* Mobile Hamburger */}

            <button className="menu-button" title="menu option for responsive" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?
                    <i className="fas fa-times fa-2x"></i> : // X icon (2x size for similar effect as size={28})
                    <i className="fas fa-bars fa-2x"></i>   // Menu icon (2x size)
                } {/* this is colled ternary operator shorter then if else */}
            </button>


            {/* Mobile Dropdown */}

            {isOpen && (
                <div className="dropdown">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/feedback" onClick={() => setIsOpen(false)}>Feedback</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar;
