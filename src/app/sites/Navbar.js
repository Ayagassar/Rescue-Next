// src/sites/Navbar.js
import Link from 'next/link'; 

export default function Navbar() {
    return (
        <nav className="nav">
            <Link href="/" className="site-title">Rescue Next</Link>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/report">Report Needs</a></li>
                <li><a href="/volunteer">Become a Volunteer</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}