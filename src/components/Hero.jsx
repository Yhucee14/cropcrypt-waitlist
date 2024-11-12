import { Link } from "react-router-dom";
import phone from "../assets/phone.png";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="flex py-4 xx:flex-col sm:flex-col justify-between items-center">
        <div className="flex px-4 flex-col">
          <div className="font-bold text-2xl py-1 text-[#0F2816]">
            <p>Empowering Sustainable</p>
            <p> Agriculture through</p>
            <p>Decentralized Investing.</p>
          </div>
          <div className=" py-4 leading-6 text-xl">
            <p className="text-[#000000B2]">
              Easily invest, track, and harvest attractive yields with{" "}
              <b className="text-[#1B6909] ">CropCrypt.</b>
            </p>
          </div>
          <div className="flex gap-2 flex-row">
            <div className="py-1 mt-0.5">
              <Link to="/community">
                <button className="flex bg-white hover:bg-gray-100 border border-[#1B6909] rounded-2xl py-2 px-1 text-[#1B6909] justify-center items-center">
                  <div className="px-3 font-bold">Invest Now!</div>
                </button>
              </Link>

              <div className="flex py-4 justify-center px-5 items-center">
                <button className="flex bg-gradient-green w-full hover:bg-white border border-[#1B6909] rounded-3xl py-2 px-2 text-white justify-center items-center">
                  <h1 className="px-3">Join the Waitlist</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={phone} alt="home" className=" z-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
