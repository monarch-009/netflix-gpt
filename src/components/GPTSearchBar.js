import React from 'react';
import { BACKGROUND_IMAGE } from '../utils/constant';

const GPTSearchBar = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex justify-center items-start pt-28 px-4"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
    >
      {/* Black box search container */}
      <div className="bg-[#141414] bg-opacity-90 px-6 py-10 rounded-lg shadow-lg w-full max-w-3xl">
        <form>
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Find Movies with GPT 🎬
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="What would you like to watch?"
              className="w-full px-5 py-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            <button
              type="submit"
              className="bg-[#e50914] hover:bg-[#f40612] text-white font-semibold px-6 py-4 rounded-md text-lg transition w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
