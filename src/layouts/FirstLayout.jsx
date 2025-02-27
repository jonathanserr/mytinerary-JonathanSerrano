import React from 'react'
import { Outlet } from "react-router-dom";
import SlideBar from "../Components/SlideBar"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import fondoMar from "../Images/fondoMar.jpg";


function FirstLayout() {

  return (
      <>
          <Header />
          <div
              className="bg-cover bg-center bg-no-repeat bg-fixed h-full fullScreenImage animate-bg-move"
              style={{ backgroundImage: `url(${fondoMar})` }}
          >
              <SlideBar />
              <main className='grow min-h-screen main flex flex-col justify-center items-center'>
                  <Outlet />
              </main>
          </div>
          <Footer />
      </>
  );
}
export default FirstLayout;

