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
    location.pathname === path ? "text-green-500" : "text-black";

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
    <div className="flex px-2 py-4 justify-between cursor-pointer">
      {isMobile ? (
        <div className="md:hidden shadow-md py-2 z-50 flex justify-between w-full items-center">
          <div className=" flex flex-row ">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" className="w-full h-12" />
              <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
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
            <div className="absolute top-20 left-0 w-full rounded-lg bg-white shadow-lg md:hidden z-10">
              <Link
                to="/"
                className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                  "/"
                )}`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/invest"
                className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                  "/invest"
                )}`}
                onClick={toggleMobileMenu}
              >
                Invest
              </Link>
              <Link
                to="/createAsset"
                className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                  "/createAsset"
                )}`}
                onClick={toggleMobileMenu}
              >
                Create Assets
              </Link>
              <Link
                to="/profile"
                className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                  "/profile"
                )}`}
                onClick={toggleMobileMenu}
              >
                Profile
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row justify-between w-screen">
          <div className=" flex flex-row ">
            <Link to="/" className="flex ">
              <img src={logo} alt="logo" />
              <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
                Cropcrypt
              </div>
            </Link>
          </div>

          <div className="flex flex-row justify-center lg:gap-8">
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

            <div className="flex justify-center items-center"> 
              <button className="flex bg-gradient-green hover:bg-gray-100 border border-[#1B6909] rounded-2xl py-2 px-1 text-white justify-center items-center">
                <h1 className="px-3">Join the Waitlist</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
