import Nav from "../components/Nav";
import herobg from "../assets/herobg.png";
import person from "../assets/person.png";
import mail from "../assets/mail.png";
import tick from "../assets/tick.png";

const Community = () => {
  return (
    <div className="px-2">
      <Nav />

      <div
        className="flex flex-col justify-between h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="flex justify-center xx:pb-16 sm:pb-32 lg:pb-40 xx:mt-[20px] sm:mt-0 lg:mt-[32px] py-3">
          <div className="border-2 w-[360px] backdrop-blur-lg sm:w-[600px] rounded-3xl bg-[#D9D9D94D] flex flex-col py-5  sm:justify-center sm:items-center">
            <div className="font-bold flex justify-center text-xl">
              Join our Community
            </div>

            <div className="py-4 flex xx:justify-start sm:justify-center sm:px-5 font-normal leading-6 xx:text-md sm:text-lg">
              <p className="text-[#000000ad] flex text-center xx:px-7 xx:leading-5 sm:leading-5 sm:px-0 justify-start sm:justify-center sm:text-center">
                Stay updated about agricultural innovations, connect with
                farmers, investors and grow with like-minded individuals.
              </p>
            </div>

            <div className="flex flex-col justify-center w-full">
                    <button
                      type="submit"
                      className="flex w-full gap-2 h-10 bg-[#359A35] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-xl py-2 px-4 text-white font-semibold justify-center items-center"
                    >
                      <img src={tick} className="w-5 h-5" />
                      <div>Sign up</div>
                    </button>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
