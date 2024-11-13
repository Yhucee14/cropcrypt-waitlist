import { useState, useEffect } from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import people from "../assets/people.png";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-green-600" : "text-[#736D6D]";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex px-4 sm:px-0 py-4 justify-between cursor-pointer">
      {isMobile ? (
        <div className="md:hidden shadow-md py-2 z-50 flex justify-between w-full items-center">
          <div className="py-1 flex flex-row ">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" className=" w-10 h-7" />
              <div className="px-2 font-bold text-lg bg-gradient-to-r from-black to-[#359A35] text-transparent bg-clip-text flex justify-center items-center">
                Cropcrypt
              </div>
            </Link>
          </div>

          <button onClick={toggleMobileMenu}>
            <img
              src={isMobileMenuOpen ? close : menu}
              alt="menu"
              className="h-6 w-6"
            />
          </button>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-20 left-0  w-full rounded-lg bg-white shadow-lg md:hidden z-10">
              <div className="py-2">
                <Link
                  to="/"
                  className={`flex border-b-gray-300 border-b-2 px-5 md:px-2 py-3 font-medium lg:px-2 ${isActive(
                    "/"
                  )}`}
                >
                  <div className="flex justify-center items-center">
                    <img src={home} alt="home" className="w-5 h-5" />
                  </div>
                  <div className="px-2  flex justify-center items-center">
                    Home
                  </div>
                </Link>
                <Link
                  to="/community"
                  className={`flex px-5 border-b-gray-300 border-b-2 py-3 md:px-2 font-medium lg:px-2 ${isActive(
                    "/"
                  )}`}
                >
                  <div className="flex justify-center items-center">
                    <img src={people} alt="home" className="w-5 h-5" />
                  </div>
                  <div className="px-2  flex justify-center items-center">
                    Community
                  </div>
                </Link>
              </div>

              <Link to="/waitlist">
                <div className="flex py-4 justify-center px-5 items-center">
                  <button className="flex bg-gradient-green w-full hover:bg-white border border-[#1B6909] rounded-3xl py-2 px-2 text-white justify-center items-center">
                    <h1 className="px-3">Join the Waitlist</h1>
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-between w-screen">
          <div className=" flex flex-row ">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" className="w-14 h-11" />
              <div className="px-2 font-bold text-xl bg-gradient-to-r from-black to-[#359A35] text-transparent bg-clip-text flex justify-center items-center">
                Cropcrypt
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center md:gap-2 lg:gap-8">
            <Link
              to="/"
              className={`flex md:px-2 font-medium lg:px-2 ${isActive("/")}`}
            >
              <div className="flex justify-center items-center">
                <img src={home} alt="home" className="w-5 h-5" />
              </div>
              <div className="px-2 mt-0.5 flex justify-center items-center">
                Home
              </div>
            </Link>

            <Link
              to="/community"
              className={`flex md:px-1 font-medium lg:px-2 ${isActive(
                "/community"
              )}`}
            >
              <div className="flex justify-center items-center">
                <img src={people} alt="profile" className="w-5 h-5" />
              </div>
              <div className="px-2 mt-0.5 flex justify-center items-center">
                Community
              </div>
            </Link>

            <Link to="/waitlist">
              <div className="flex justify-center items-center">
                <button className="flex bg-gradient-green w-full hover:bg-none hover:bg-white hover:text-[#1B6909] hover:border-[#1B6909] border border-[#1B6909] rounded-3xl py-1.5 sm:py-2 sm:px-2 text-white justify-center items-center transition-all duration-300 ease-in-out">
                  <h1 className="px-3">Join the Waitlist</h1>
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
