import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
        const res = await data.json();

        const filterData = res.results.filter((video) => video.type === 'Trailer');

        const trailer = filterData.length ? filterData[0] : res.results[0];

        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideo();
    }, []);
};

export default useMovieTrailor;