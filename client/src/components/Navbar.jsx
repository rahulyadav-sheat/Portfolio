import { useState } from "react";
import "./Navbar.css";
function Navbar(){
// menuOpen= is the mobile menu open right now?(true/false)
    const [menuOpen, setMenuOpen] =useState(false);
    function toggleMenu(){
        setMenuOpen(!menuOpen);
    }
    function closeMenu(){
        setMenuOpen(false);
    }
    return(
        <header className="navbar">
            <nav className="container navbar-inner">
                <a href="#home" className="navbar-logo" onClick={closeMenu}>
                    Rahul Yadav
                </a>
                <button className="navbar-toggle"
                onClick={toggleMenu}
                aria-label="Open or close the menu"
                aria-expanded={menuOpen}>
                    {menuOpen ? "X" : "☰"}
                </button>
                <ul className= {menuOpen? "navbar-links open": "navbar-links"}>
                    <li>
                        <a href="#about" onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeMenu}>Skills</a>
                    </li>
                    <li>
                        <a href="#project" onClick={closeMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#journey" onClick={closeMenu}>Journey</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}
export default Navbar;