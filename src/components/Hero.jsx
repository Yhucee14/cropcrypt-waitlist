import { Link } from "react-router-dom";
import phone from "../assets/phone.png";

const Hero = () => {
  return (
    <div>
      <div className="flex py-4 xx:flex-col sm:flex-col justify-between items-center">
        <div className="flex px-4 flex-col">
          <div className="font-bold text-2xl sm:text-3xl py-1 text-[#0F2816]">
            <p className="flex sm:justify-center">Empowering Sustainable</p>
            <p className="flex justify-center">
              {" "}
              Agriculture through Decentralized Investing.
            </p>
          </div>
          <div className=" py-4 flex justify-center w-[650px] px-5 leading-6 text-lg">
            <p className="text-[#000000ad] flex justify-center text-center">
              Be the first to contribute to sustainable agriculture on CropCrypt
              and also get insights about our launch{" "}
            </p>
          </div>
          <div className="flex py-2 gap-2 justify-center flex-row">
            <div className="flex py-1 justify-center px-5 items-center">
              <Link to="/waitlist">
                <button className="flex bg-gradient-green w-full hover:bg-none hover:bg-white hover:text-[#1B6909] hover:border-[#1B6909] border border-[#1B6909] rounded-3xl py-2 px-2 text-white justify-center items-center transition-all duration-300 ease-in-out">
                  <h1 className="px-3">Join the Waitlist</h1>
                </button>
              </Link>
            </div>

            <div className="py-1 ">
              <Link to="/community">
                <button className="flex bg-white hover:bg-[#359A35] hover:text-white border border-[#1B6909] rounded-3xl py-2 px-1 text-[#1B6909] justify-center transition-all duration-300 ease-in-out items-center">
                  <div className="px-3 font-bold">Join Community!</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={phone} alt="home" className=" z-20" />
        </div>
      </div>

      <div className="flex justify-center font-normal text-sm text-black">
        @2024-2025 Cropcrypt. All rights reserved.
      </div>
    </div>
  );
};

export default Hero;
