import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenuItems();
      }, []);
    
      const fetchMenuItems = async () => {
        try {
          const Response = await fetch(MENU_API+resId);
          const json1 = await Response.json();
          setResInfo(json1.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || []);
          console.log(resInfo, "resInfo");
        } catch (error) {
          console.error("Error fetching menu items:", error);
        }
}};
export default useRestaurantMenu;