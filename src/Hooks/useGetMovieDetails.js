import { useEffect, useState } from "react";
import { API_options } from "../Configuration/Constants";

const useGetMovieDetails = (id) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setDetails(null);
      setError(null);
      setLoading(false);
      return;
    }

    const fetchTrailer = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const response = await fetch(url, API_options); // Ensure API_OPTIONS is defined
        if (!response.ok) {
          throw new Error("Failed to fetch trailer details");
        }
        const json = await response.json();
        setDetails(json || null); // Set first trailer or null if none found
      } catch (err) {
        console.error("Error fetching trailer:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  return { details, loading, error };
};

export default useGetMovieDetails;
