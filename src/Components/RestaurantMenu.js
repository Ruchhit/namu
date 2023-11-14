import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resInfo2,setResInfo2] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const json = await data.json();
  //     setResInfo(json.data);
  //     console.log(json);
      
  //     // After setting the state, fetch menu items
       
  //       fetchMenuItems();
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const fetchMenuItems = async() => {
    try {
      const Response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=32399");
      const json1 = await Response.json();
      setResInfo2(json1.data);
      console.log(json1);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };
  // Add a semicolon here
// if(resInfo === null || resInfo2 === null)
// {
//     return <Shimmer/>
// }
// const { restaurants } = resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle || [];
const {itemCards} = resInfo2?.card[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
setResInfo(itemCards);
console.log(itemCards);
return (
<div className="menu">
    {resInfo && resInfo.length ? (
      <div>
        {console.log(resInfo)}
        <h1>{itemCards[0].card.info.name}</h1>
        <ul>
          <li>{itemCards[1].card.info.name}</li>
        </ul>
      </div>
    ) : (
      <h1>Loading....</h1>
    )}
  </div>
);
};
export default RestaurantMenu;