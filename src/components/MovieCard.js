import { IMG_CDN_URL } from "../Configuration/Constants";


const MovieCard = ({key, path}) => {
    console.log(key, path);
  if (!path) return null;
  return (
    <div className="w-36 md:w-48 mx-2">
      <img alt="Movie Card" src={IMG_CDN_URL + path} />
    </div>
  );
};
export default MovieCard;