import { CDN_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const CardContainer = (props) => {
  const { resData } = props;
 const{cloudinaryImageId,name,avgRating,cuisines} = resData?.info;
  return (
    <div className=" p-2 m-4 w-52 h-72 bg-gray-300 border border-solid border-black hover:shadow-xl rounded-sm">
      <img className="w-60 h-40 rounded-sm" src={CDN_LINK + cloudinaryImageId}/>
       <h2 className="font-bold text-lg">{name}</h2>
       <h3>{cuisines.join(", ")}</h3>
       <h4>{avgRating}</h4>
    </div>
  );
};

export default CardContainer;
