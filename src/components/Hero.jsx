import { Link } from "react-router-dom";
import phone from "../assets/phone.png";

const Hero = () => {
  return (
    <div>
      <div className="flex xx:py-4 xx:px-14 sm:px-0 sm:py-2 xx:flex-col sm:flex-col justify-between items-center">
        <div className="flex px-4 flex-col">
          <div className="font-bold flex flex-col xx:px-2 sm:px-0 justify-start xx:leading-10 sm:leading-10 sm:py-3 text-2xl sm:text-3xl  text-[#0F2816]">
            <p className="flex justify-start px-36 sm:px-0  sm:justify-center ">Empowering Sustainable</p>
            <p className="flex justify-start xx:leading-9 sm:leading-0 xx:px-36  sm:px-0">
              
              Agriculture through Decentralized Investing.
            </p>
          </div>
          <div className=" py-4 flex xx:justify-start sm:justify-center w-[650px] px-2 sm:px-5 font-normal leading-6 xx:text-md sm:text-lg">
            <p className="text-[#000000ad] flex xx:px-36 xx:leading-5 sm:leading-6 sm:px-0 justify-start sm:justify-center sm:text-center">
              Be the first to contribute to sustainable agriculture on CropCrypt
              and also get insights about our launch{" "}
            </p>
          </div>
          <div className="flex py-2 gap-2 px-36 sm:px-0 justify-start sm:justify-center flex-row">
            <div className="flex py-1 justify-center px-2 sm:px-5 items-center">
              <Link to="/waitlist">
                <button className="flex bg-gradient-green w-full hover:bg-none hover:bg-white hover:text-[#1B6909] hover:border-[#1B6909] border border-[#1B6909] rounded-3xl py-1.5 sm:py-2 sm:px-2 text-white justify-center items-center transition-all duration-300 ease-in-out">
                  <h1 className="px-3">Join the Waitlist</h1>
                </button>
              </Link>
            </div>

            <div className="py-1 ">
              <Link to="/community">
                <button className="flex bg-white hover:bg-[#359A35] hover:text-white border border-[#1B6909] rounded-3xl py-1.5 sm:py-2 sm:px-1 text-[#1B6909] justify-center transition-all duration-300 ease-in-out items-center">
                  <div className="px-3 font-bold">Join Community</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="xx:pb-16 xx:pt-8 sm:pt-0 sm:pb-0 lg:pb-10">
          <img src={phone} alt="home" className=" z-20" />
        </div>
      </div>

      <div className="flex justify-center xx:pt-24 sm:pt-20  lg:pt-20px font-normal text-sm text-black">
        @2024-2025 Cropcrypt. All rights reserved.
      </div>
    </div>
  );
};

export default Hero;
