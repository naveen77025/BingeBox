import { IMG_CDN_URL } from "../Configuration/Constants";


const MovieCard = ({key, path}) => {
    console.log(key, path);
  if (!path) return null;
  return (
    <div className="w-36 h-52 md:w-48 md:h-64 mx-2 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-transform transform hover:scale-105">
      <img alt="Movie Card" src={IMG_CDN_URL + path} />
    </div>
  );
};
export default MovieCard;