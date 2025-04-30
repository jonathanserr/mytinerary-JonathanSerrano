import { useState } from "react"
import { NavLink } from "react-router-dom"

const routes = [
    { path: "/", name: "🏠 Home" },
    { path: "/cities", name: "🌇 Cities" },

]

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav>
            <ul className="flex justify-around items-center bg-blue-600 text-white  text-xl h-24 top-0 right-0 left-0 z-50">
                <li>
                    <img className="ml-6 h-20" src="../src/Images/Logo.png" alt="LOGO" />


                </li>
                <li>
                    <h1 className="text-4xl text-white underline ml-4 italic">My Tinerary</h1>
                </li>

                <div className="hidden md:flex space-x-1 bg-blue-600 text-white font-bold">
                    {routes.map((route) => (
                        <li className="hover:bg-lime-900/40 rounded-xl p-1" key={route.path}>
                            <NavLink className="px-3" to={route.path}>{route.name}</NavLink>
                        </li>
                    ))}
                    <li>
                        <button className="flex content-center bg-gray-900/20 hover:bg-gray-900/40 rounded-xl px-2 ml-3 py-1">
                            <img className="h-8" src="../src/assets/avatar-icon.png" alt="" />
                            <p className="pl-2">Login</p>
                        </button>
                    </li>
                </div>

                <button className="md:hidden text-yellow-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "❌" : "⛔"}
                </button>

                {isOpen && (
                    <div className="absolute w-full h-64 md:hidden bg-[#727D73]/75 flex flex-col shadow-lg py-2 rounded-lg top-24 p-10 z-40">
                        <div className="flex flex-col gap-5 z-40 mt-10">
                            {routes.map((route) => (
                                <NavLink className="text-2xl" to={route.path} key={route.path}>{route.name}</NavLink>
                            ))}
                            <button className="w-30 flex content-center bg-[#D98324]/75 hover:bg-lime-900/40 rounded-xl px-2 py-1">
                                <img className="h-8" src="../src/assets/avatar-icon.png" alt="" />
                                <p className="pl-2">Login</p>
                            </button>
                        </div>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Navbar

