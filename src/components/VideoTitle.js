import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-20 md:bottom-24 lg:bottom-32 left-4 md:left-10 text-white max-w-xs sm:max-w-md md:max-w-xl z-20">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg max-w-md mb-4 sm:mb-6 drop-shadow-md">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
        <button className="bg-white text-black text-sm md:text-base font-semibold px-4 md:px-6 py-2 rounded hover:bg-opacity-80 transition flex items-center justify-center">
          <FaPlay className="mr-2" />
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white text-sm md:text-base font-semibold px-4 md:px-6 py-2 rounded hover:bg-opacity-90 transition flex items-center justify-center">
          <AiOutlineInfoCircle className="mr-2 text-xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
