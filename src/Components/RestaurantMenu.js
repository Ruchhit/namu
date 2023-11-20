import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const name = resInfo?.name;
  const avgRating = resInfo?.avgRating;
  const costForTwoMessage = resInfo?.costForTwoMessage;
  const cloudinaryImageId = resInfo?.cloudinaryImageId;
  const categories = resInfo?.categories;

  return (
    <>
      {resInfo ? (
        <div>
          <div className="bg-slate-300 mx-80 py-2 px-4 flex justify-between">
            <div>
              <h1 className="font-bold text-2xl">{name}</h1>
              <h2 className="">{costForTwoMessage}</h2>
              <h2 className="">{avgRating}</h2>
            </div>
            <img className="w-36" src={CDN_LINK + cloudinaryImageId} alt={name} />
          </div>
          <div className="bg-slate-300 mx-80 py-2 px-4">
            {/* Controlled Component */}
            {categories.map((category, index) => (
              <RestaurantCategory
                key={index}
                data={category?.card?.card}
                showItems={openIndex === index}
                setShowIndex={() => setOpenIndex(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>LOADING....</h1>
      )}
    </>
  );
};

export default RestaurantMenu;
