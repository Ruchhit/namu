import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo2, setResInfo2] = useState(null);
  const { resId } = useParams();
 const resInfo2 = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenuItems();
  // }, []);

  // const fetchMenuItems = async () => {
  //   try {
  //     const Response = await fetch(MENU_API+resId);
  //     const json1 = await Response.json();
  //     setResInfo2(json1.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || []);
  //     console.log(resInfo2, "resInfo2");
  //   } catch (error) {
  //     console.error("Error fetching menu items:", error);
  //   }
  // };
  return (
    <>
      {resInfo2 ? (
        <div className="menu">
        <h1>MENU</h1>
          {resInfo2 && resInfo2.map((items) => {
              return (
                <div key={items.card.info.name}>
                  <ul>
                    <li>{items.card.info.name} - {"RS."}{items.card.info.price /100}</li>
                  </ul>
                </div>
              );
            })}
        </div>
      ) : (
        <h1>LOADING....</h1>
      )}
    </>
  );
};
export default RestaurantMenu;