import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../Images/Logo.png"

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
        <header className="absolute top-0 left-0 w-full flex items-center justify-center px-10 h-20 z-50 bg-transparent transition-all duration-300">
        {/* Logo fijo en la esquina superior izquierda */}
        <img
            src={logo}
            className="fixed top-4 left-4 w-24 h-16 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-2"
            alt="Logo-My-Itinerary"
            onClick={handleLogoClick}
        />

            {/* Título con efecto de desaparición */}
            <h1
                className={`text-center pe-10 mx-auto cursor-pointer text-3xl font-bold tracking-wide transition-all duration-500
                    font-poppins text-white drop-shadow-md hover:text-black hover:drop-shadow-xl 
                    ${isScrolled ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0'}`}
                onClick={handleLogoClick}
            >
                My Tinerary
            </h1>
        </header>
    );
}

export default Header;