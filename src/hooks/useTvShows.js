import { useEffect } from 'react';
import { API_OPTION } from '../utils/constant';
import { addTVShows } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';


const useTVShows = () => {
    const dispatch = useDispatch();

    const getTVShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
            API_OPTION
        );
        const json = await data.json();
        dispatch(addTVShows(json.results));
    };

    useEffect(() => {
        getTVShows();
    }, []);
}

export default useTVShows;