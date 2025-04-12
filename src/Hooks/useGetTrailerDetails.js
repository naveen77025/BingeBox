import { useEffect, useState } from "react";
import { API_options } from "../Configuration/Constants";

const useGetTrailerDetails=(trendingMovieId)=>{
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!trendingMovieId) {
        setTrailer(null);
        setError(null);
        setLoading(false);
        return;
      }
  
      const fetchTrailer = async () => {
        setLoading(true);
        setError(null);
        try {
          const url = `https://api.themoviedb.org/3/movie/${trendingMovieId}/videos?language=en-US`;
          const response = await fetch(url, API_options); // Ensure API_OPTIONS is defined
          if (!response.ok) {
            throw new Error('Failed to fetch trailer details');
          }
          const json = await response.json();
          const filteredData = json.results.filter((item) => item.type === 'Trailer');
          setTrailer(filteredData[0] || null); // Set first trailer or null if none found
        } catch (err) {
          console.error('Error fetching trailer:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTrailer();
    }, [trendingMovieId]);
  
    return { trailer, loading, error };
  };

  export default useGetTrailerDetails;