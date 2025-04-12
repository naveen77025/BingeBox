import React from 'react';
import { useParams } from 'react-router-dom';
import useGetTrailerDetails from '../Hooks/useGetTrailerDetails';
import useGetMovieDetails from '../Hooks/useGetMovieDetails';

const MovieView = () => {
  const { id } = useParams();
  const { trailer, loading: trailerLoading, error: trailerError } = useGetTrailerDetails(id);
  const { details, loading: detailsLoading, error: detailsError } = useGetMovieDetails(id);

  console.log('MovieView - Trailer:', trailer, 'Details:', details);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Trailer Section */}
      <div className="w-full relative" style={{ aspectRatio: '16 / 7' }}>
        {trailerLoading && <p className="text-center p-4">Loading trailer...</p>}
        {trailerError && <p className="text-center p-4 text-red-500">Error: {trailerError}</p>}
        {!trailerLoading && !trailerError && !trailer && (
          <p className="text-center p-4">No trailer available</p>
        )}
        {!trailerLoading && !trailerError && trailer && (
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailer.key}`}
              title={trailer.name || 'Trailer'}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            {/* Gradient overlay for fade effect */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
            {/* Optional "More Details" hint */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-gray-300 text-sm">
              Scroll down for more details
            </div>
          </div>
        )}
      </div>

      {/* Movie Details Section */}
      <div className="p-6 max-w-5xl mx-auto">
        {detailsLoading && <p>Loading movie details...</p>}
        {detailsError && <p className="text-red-500">Error: {detailsError}</p>}
        {!detailsLoading && !detailsError && details && (
          <div className="space-y-4">
            <div>
              <h1 className="text-6xl font-bold">{details.title}</h1>
              {details.tagline && <p className="text-lg italic text-gray-400">{details.tagline}</p>}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-300">{details.overview}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {details.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Release Date</h2>
                <p>{new Date(details.release_date).toLocaleDateString()}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Runtime</h2>
                <p>{details.runtime} minutes</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Rating</h2>
                <p>{details.vote_average.toFixed(1)} / 10 ({details.vote_count} votes)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieView;