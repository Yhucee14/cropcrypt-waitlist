import Nav from "../components/Nav";
import herobg from "../assets/herobg.png";
import link from "../assets/link.png";
import tweet from "../assets/tweet.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";

const Community = () => {
  return (
    <div className="px-2">
      <Nav />

      <div
        className="flex flex-col justify-between h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="flex justify-center xx:pb-16 sm:pb-32 lg:pb-40 xx:mt-[20px] sm:mt-0 lg:mt-[32px] py-3">
          <div className="border w-[400px] backdrop-blur-lg sm:w-[600px] sm:mt-[10px] rounded-3xl bg-[#D9D9D94D] flex flex-col py-5 sm:px-10 sm:justify-center sm:items-center">
            <div className="font-bold flex justify-center text-xl">
              Join our Community
            </div>

            <div className="py-4 flex xx:justify-start sm:justify-center sm:px-3 font-normal leading-6 xx:text-md sm:text-lg">
              <p className="text-[#000000ad] flex text-center xx:px-2 xx:leading-5 sm:leading-5 sm:px-0 justify-start sm:justify-center sm:text-center">
                Stay updated about agricultural innovations, connect with
                farmers, investors and grow with like-minded individuals.
              </p>
            </div>

            <div className="py-5 flex flex-col justify-center">
              <a href="https://www.x.com" target="_blank" className="flex justify-center">
                <div className="flex flex-col justify-center py-1 w-[350px]">
                  <button
                    type="submit"
                    className="flex w-full justify-between gap-2 h-12 bg-[#c5c2c2] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-lg py-2 px-4  font-semibold  items-center"
                  >
                    <div className="flex flex-row justify-between gap-4 px-2">
                      <img src={tweet} className="w-5 h-5 mt-0.5" />
                      <div className="text-black font-normal">
                        X (Formerly Twitter)
                      </div>
                    </div>

                    <div>
                      <img src={link} className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </a>

              <a href="https://www.Telegram.com" className="flex justify-center" target="_blank">
                {" "}
                <div className="flex flex-col justify-center py-3 w-[350px]">
                  <button
                    type="submit"
                    className="flex w-full justify-between gap-2 h-12 bg-[#c5c2c2] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-lg py-2 px-4  font-semibold  items-center"
                  >
                    <div className="flex flex-row justify-between gap-4 px-2">
                      <img src={telegram} className="w-5 h-5 mt-0.5" />
                      <div className="text-black font-normal">Telegram</div>
                    </div>

                    <div>
                      <img src={link} className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </a>

              <a href="https://www.Whatsapp.com" className="flex justify-center" target="_blank">
                {" "}
                <div className="flex flex-col justify-center py-1 w-[350px]">
                  <button
                    type="submit"
                    className="flex w-full justify-between gap-2 h-12 bg-[#c5c2c2] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-lg py-2 px-4  font-semibold  items-center"
                  >
                    <div className="flex flex-row justify-between gap-4 px-2">
                      <img src={whatsapp} className="w-5 h-5 mt-0.5" />
                      <div className="text-black font-normal">Whatsapp</div>
                    </div>

                    <div>
                      <img src={link} className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center xx:pt-24 sm:pt-20  lg:pt-20px font-normal text-sm text-black">
          @2024-2025 Cropcrypt. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Community;
