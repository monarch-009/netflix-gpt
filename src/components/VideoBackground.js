import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    useMovieTrailor(movieId);

    return (
        //Tailwind CSS classes for responsive iframe
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-25%] left-[-25%] w-[150%] h-[150%]">
                    <iframe
                        className="w-full h-full scale-100"
                        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&fs=0&controls=0&loop=1&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>

        </div>
    )
}

export default VideoBackground;

