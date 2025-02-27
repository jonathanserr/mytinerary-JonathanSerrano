import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../Images/Logo.jpg"

function Header() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    function handleLogoClick() {
        navigate('/');
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="absolute top-0 left-0 w-full flex items-center px-10 h-20 z-50 bg-transparent transition-all duration-300">
            {/* Logo */}
            <img
                src={logo}
                className="w-24 h-16 cursor-pointer transition-transform duration-300 hover:scale-105"
                alt="Logo-My-Itinerary"
                onClick={handleLogoClick}
            />

            {/* Título con efecto de desaparición */}
            <h1
                className={`text-blue-600 text-center pe-10 mx-auto cursor-pointer text-3xl font-bold tracking-wide transition-all duration-500 ${
                    isScrolled ? 'opacity-0 hidden' : 'opacity-200'
                }`}
                onClick={handleLogoClick}
            >
                My Tinerary
            </h1>
        </header>
    );
}

export default Header;