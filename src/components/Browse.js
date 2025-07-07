import { use } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTVShows from "../hooks/useTvShows";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTVShows();

  return (
    <div>
      <Header />
      {showGPTSearch ? <GPTSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}

    </div>
  )
}

export default Browse
