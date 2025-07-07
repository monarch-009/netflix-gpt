import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';

const GPTSearch = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <GPTSearchBar />
            <GPTMovieSuggestion />
        </div>
    )
}

export default GPTSearch; 