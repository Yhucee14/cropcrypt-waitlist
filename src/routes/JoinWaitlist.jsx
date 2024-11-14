import Nav from "../components/Nav";
import herobg from "../assets/herobg.png";
import person from "../assets/person.png";
import mail from "../assets/mail.png";
import tick from "../assets/tick.png";
import Modal from "../components/Modal";
import { useState } from "react";

const JoinWaitlist = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e) => {
    e.preventDefault(); 
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="px-2 ">
      <Nav />

      <div
        className="flex flex-col justify-between h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="flex justify-center font-bold text-3xl pt-12 sm:py-8">
          Coming Soon
        </div>

        <div className="flex justify-center xx:pb-16 sm:pb-32 lg:pb-40 xx:mt-[20px] sm:mt-0 lg:mt-[32px] py-3">
          <div className="border-2 w-[360px] backdrop-blur-lg sm:w-[600px] rounded-3xl bg-[#d9d9d92c] flex flex-col py-5  sm:justify-center sm:items-center">
            <div className="font-bold flex justify-center text-xl">
              Join our Waitlist
            </div>

            <div className="py-4 flex xx:justify-start sm:justify-center sm:px-5 font-normal leading-6 xx:text-md sm:text-lg">
              <p className="text-[#000000ad] flex text-center xx:px-7 xx:leading-5 sm:leading-5 sm:px-0 justify-start sm:justify-center sm:text-center">
                Be the first to contribute to sustainable agriculture on
                Cropcrypt and also get insights about our launch.
              </p>
            </div>

            <div className="py-3 w-full">
              <form onSubmit={handleShowModal} className="flex flex-col justify-between gap-4  w-full">
                <div className="relative w-full xx:px-4 sm:px-0 sm:w-[75%] flex flex-col gap-4 mx-auto">
                  <div>
                    <img
                      src={person}
                      alt="Person Icon"
                      className="absolute xx:left-10 xx:top-6 sm:left-6 sm:top-6 transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder="Full name"
                      className="border-2 border-gray-400 bg-white focus:bg-[#72b87277] w-full rounded-xl h-12 text-sm pl-14 text-[#1A0F28] focus:outline-none"
                    />
                  </div>

                  <div>
                    <img
                      src={mail}
                      alt="mail Icon"
                      className="absolute xx:left-10 xx:top-[53%] sm:left-6 sm:top-[53%] transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                      type="text"
                      placeholder="Email address"
                      className="border-2 border-gray-400 bg-white focus:bg-[#72b87277] w-full rounded-xl h-12 text-sm pl-14 text-[#1A0F28] focus:outline-none"
                    />
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
              </form>
            </div>
          </div>
        </div>

        {showModal && <Modal onClose={handleCloseModal}></Modal>}

        <div className="flex justify-center xx:pt-24 sm:pt-20  lg:pt-20px font-normal text-sm text-black">
          @2024-2025 Cropcrypt. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
