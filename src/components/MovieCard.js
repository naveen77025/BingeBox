import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../Configuration/Constants";

const MovieCard = ({path,id }) => {
  const navigate = useNavigate();
  if (!path) return null;

  const handleClick = () => {
    navigate(`/movie/${id}`); // Navigate to the movie view page with the movie's ID
  };
  return (
    <div onClick={handleClick} className="w-36 h-60 md:w-48 md:h-64 mx-2 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-transform transform hover:scale-105 aspect-[2/3] cursor-pointer">
      <img alt="Movie Card" src={IMG_CDN_URL + path} className="w-full h-full object-cover" />
    </div>
  );
};
export default MovieCard;
