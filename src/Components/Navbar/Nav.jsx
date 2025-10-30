import { Link } from 'react-router-dom';
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
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

                <button className="menu-button" title="menu option for responsive"onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
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
