import { Link } from "react-router-dom";
import phone from "../assets/phone.png";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between xx:gap-[70px] xs:gap-[160px] ss:gap-[130px] md:gap-[2px] lg:gap-25px]">
      <div className="flex py-4 px-4 sm:px-0 flex-col justify-center ss:items-center">
        <div className="flex flex-col justify-center ss:items-center ">
          <div className="font-bold px-2 sm:px-0 leading-8 sm:leading-10 sm:py-3 ss:text-center text-2xl sm:text-3xl text-[#0F2816] max-w-full">
            <p>Empowering Sustainable</p>
            <p>Agriculture through Decentralized Investing.</p>
          </div>
          <div className="py-3 px-2 sm:px-5 sm:w-[650px] ss:text-center font-normal text-md sm:text-lg text-[#000000ad]  leading-5 sm:leading-5">
            <p>
              Be the first to contribute to sustainable agriculture on CropCrypt
              and also get insights about our launch.
            </p>
          </div>
          <div className="flex py-2 gap-2 border">
            <div>
              <Link to="/waitlist">
                <button className="bg-gradient-green hover:bg-none hover:bg-white hover:text-[#1B6909] hover:border-[#1B6909] border border-[#1B6909] rounded-3xl py-2 px-4 text-white transition-all duration-300">
                  Join the Waitlist
                </button>
              </Link>
            </div>
            <div>
              <Link to="/community">
                <button className="bg-white hover:bg-[#359A35] hover:text-white border border-[#1B6909] rounded-3xl py-2 px-4 text-[#1B6909] transition-all duration-300">
                  Join Community
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="xx:mt-[60px] sm:mt-[10px] lg:mt-[30px] lg:pb-[35px]">
          <img src={phone} alt="home" className="z-20" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
