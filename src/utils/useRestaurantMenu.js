import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, [resId]);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json1 = await response.json();
    
      console.log(json1.data.cards[0].card.card || [])
      console.log(json1.data.cards[0]?.card?.card?.info.name);
      const {name,avgRating,costForTwoMessage,cloudinaryImageId}= json1.data?.cards[0]?.card?.card?.info;

      //gtting only item category data for accordion
      console.log(json1.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
      const categories = json1.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log(categories);
      const combinedData={
        name,
        avgRating,
        costForTwoMessage,
        cloudinaryImageId,
        categories,
      }
      setResInfo( combinedData);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  return resInfo; // Don't forget to return the state from the hook
};

export default useRestaurantMenu;
