import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTVShows: (state, action) => {
            state.tvShows = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        
    },
});
export const { addNowPlayingMovies, addTrailerVideo , addPopularMovies, addTopRatedMovies, addUpComingMovies, addTVShows } = movieSlice.actions;
export default movieSlice.reducer;
