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
      setResInfo(
        json1.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card.itemCards || []
      );
      console.log(resInfo, "resInfo");
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  return resInfo; // Don't forget to return the state from the hook
};

export default useRestaurantMenu;
