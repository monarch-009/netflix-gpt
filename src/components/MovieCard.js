import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
    return (
        <div className="min-w-[150px] md:min-w-[180px] transition-transform duration-300 hover:scale-105">
            <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
        </div> 
    )
}

export default MovieCard;