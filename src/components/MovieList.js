import React, { useRef, useState } from 'react'
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

    const MovieList = ({title,movieData}) => {
        const scrollRef = useRef(null); 
        const [showTooltip, setShowTooltip] = useState(true); 
        const scrollLeft = () => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); 
              setShowTooltip(false); 
            }
        };
        
        const scrollRight = () => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); 
              setShowTooltip(false); 
            }
        };
        //console.log(movieData);
        return (<div className="px-3 overflow-hidden relative">
            <h1 className="text-3xl text-white my-2">{title}</h1>
            <div className="relative">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
              >
                <FaChevronLeft size={24} />
              </button>
              <div
                ref={scrollRef}
                className="flex overflow-x-scroll scrollbar-none"
                onScroll={() => setShowTooltip(false)}
              >
                <div className="flex">
                  {movieData &&
                    movieData.map((movie) => (
                      <MovieCard key={movie.id} path={movie.poster_path} id={movie.id} />
                    ))}
                </div>
              </div>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>
        );
    }

export default MovieList
