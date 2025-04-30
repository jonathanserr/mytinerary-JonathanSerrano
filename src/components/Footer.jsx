import { NavLink } from "react-router-dom"


function Footer() {  
    return(
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        <div className="footer-section space-y-2">
          <h3 className="text-xl font-semibold text-blue-400">CONTACT INFORMATION</h3>
          <p>Address  :  221B Baker Street, London, NW1 6XE, United Kingdom</p>
          <p>Phone: +123 666 666 666</p>
          <p>
            Email: 
            <NavLink to="mailto:info@mytinerary.com" className="text-blue-400 hover:underline ml-1">
              info@mytinerary.com
            </NavLink>
          </p>
          
        </div>

        <div className="footer-section space-y-2">
          <h3 className="text-xl font-semibold text-blue-400">LINKS OF INTEREST</h3>
          <ul className="space-y-1">
            <li><NavLink to="#" className="hover:text-blue-400">Best Destinations</NavLink></li>
            <li><NavLink to="#" className="hover:text-blue-400">FAQs</NavLink></li>
            <li><NavLink to="#" className="hover:text-blue-400">Contact Us</NavLink></li>
            <li><NavLink to="#" className="hover:text-blue-400">Terms & Conditions</NavLink></li>
            <li><NavLink to="#" className="hover:text-blue-400">Privacy Policy</NavLink></li>
          </ul>
        </div>

        <div className="footer-section space-y-4">
          <h3 className="text-xl font-semibold text-blue-400">Follow Us</h3>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li><NavLink to="#" className="hover:text-blue-400">Twitter</NavLink></li>
            <li><NavLink to="#" className="hover:text-blue-400">Instagram</NavLink></li>
            <li><NavLink to="#" className="hover:text-blue-400">Facebook</NavLink></li>
          </ul>

          <div className="newsletter">  
            <h3 className="text-xl font-semibold text-blue-400">Subscribe to our Newsletter</h3>
            <form action="#" className="flex flex-col sm:flex-row items-center gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-all text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
        &copy;  My Tinerary. All rights reserved.
      </div>
    </footer>
    )
}

export default Footer