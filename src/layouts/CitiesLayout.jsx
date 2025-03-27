 import React from 'react'
 import { Outlet } from "react-router-dom";
 import marBg from "../images/fondoMar.jpg";
 import SlideBar from "../Components/SlideBar";
 import Header from "../components/Header";
 import Footer from "../components/Footer";


function CitiesLayout() {
    return (
        <>
            <Header />
             <div
                 className="bg-cover bg-center bg-no-repeat bg-fixed h-full"
                 style={{ backgroundImage: `url(${marBg})` }}
             >
                 <SlideBar />
                 <main className="grow min-h-screen flex flex-col justify-center items-center">
                     <Outlet />
                 </main>
             </div>
             <Footer />
        </>
    )
}

export default CitiesLayout