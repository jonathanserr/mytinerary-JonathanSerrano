import React from "react";

function CallButton({ onClick }) {
  return (
    <div className="flex justify-center items-center p-5">
      <button
        onClick={onClick}
        className="relative px-10 py-4 bg-black/30 text-black text-xl font-semibold rounded-lg shadow-lg 
                   transition-all duration-500 hover:bg-blue-500 hover:text-white 
                   hover:shadow-black-500/50 text-shadow-md hover:text-shadow-lg 
                   before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r  
                   before:from-transparent before:via-white/20 before:to-transparent 
                   before:opacity-0 before:transition-opacity before:duration-500 
                   hover:before:opacity-100 shadow-white/80 animate-pulse"
      >
        Discover New Directions
      </button>
    </div>
  );
}
export default CallButton;