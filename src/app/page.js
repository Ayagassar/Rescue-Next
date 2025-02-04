"use client"

import { useState } from 'react'; 
import Navbar from "./sites/Navbar"; 
import Home from "./pages/Home"; 
import Report from "./pages/Report"; 
import Volunteer from "./pages/Volunteer"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 

export default function Page() {
    const [currentPage, setCurrentPage] = useState("home"); 
    let Component;

    // Use a switch statement to determine which component to render
    switch (currentPage) {
        case "home":
            Component = Home;
            break;
        case "report":
            Component = Report;
            break;
        case "volunteer":
            Component = Volunteer;
            break;
        case "about":
            Component = About;
            break;
        case "contact":
            Component = Contact;
            break;
        default:
            Component = Home; // Default to Home if the path doesn't match
    }

    return (
        <>
            <Navbar setCurrentPage={setCurrentPage} /> {/* Pass the setter function to Navbar */}
            <Component /> {/* Render the selected component */}
        </>
    );
}

