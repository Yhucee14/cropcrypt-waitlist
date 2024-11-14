import x from "../assets/x.png";
import verified from "../assets/verified.png";
import tick from "../assets/tick.png";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed z-50 px-4 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg w-[500px]">
        <div className="px-4 flex justify-end py-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <img src={x} alt="home" className="w-7 h-7 " />
          </button>
        </div>

        <div className="py-2 flex justify-center flex-col">
          <div className="flex py-2 justify-center">
            <img src={verified} alt="home" className="" />
          </div>

          <div className="font-bold text-2xl px-16 sm:px-32 text-center py-7 flex justify-center">
            We’ve added you to our waiting list!
          </div>

          <div className="py-2 flex xx:justify-start sm:justify-center sm:px-5 font-normal leading-6 xx:text-md sm:text-lg">
            <p className="text-[#000000ad] flex text-center xx:px-8 xx:leading-5 sm:leading-5 sm:px-0 justify-start sm:justify-center sm:text-center">
              Thanks for joining our waiting list, we’ll let you know when
              Cropcrypt is ready.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center py-5 ">
            <button
              type="submit"
              className="flex justify-center gap-2 w-[350px] h-12 bg-[#359A35] hover:bg-[white] hover:border-2 hover:border-gray-400 hover:text-[#359A35] rounded-xl py-2 px-4 text-white font-semibold  items-center"
            >
              <img src={tick} className="w-5 h-5 mt-0.5" />
              <div>Done</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
