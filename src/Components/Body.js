import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  console.log(listOfRestaurants)

  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (listOfRestaurants.length === 0) {
      return; // Avoid calling the following logic if listOfRestaurants is empty
    }

    // Your other conditional logic based on the online status
    if (status === false) {
      console.log("No internet connection");
      return;
    }

    // Additional logic can be added based on the online status

  }, [listOfRestaurants, status]);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      setlistOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  if (status === false) {
    return <h1>Oops!! Please check your internet connection...</h1>;
  }
console.log(listOfRestaurants)
  return (
    <div className="body">
      <div className="flex">
        <div className="m-2 px-4 ">
            <input className="border border-solid border-black py-0" type="text" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value);
            }}/>
            <button className="m-2 px-2 py-0 bg-lime-400 rounded-lg shadow-md" onClick={()=>{
                const filteredRes = listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFilteredRestaurant(filteredRes);
            }}>search</button>
             <button
          className="m-2 px-2 py-0 bg-lime-400 rounded-lg shadow-md"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredData);
          }}
        >
          Filter Top Rated restaurants!!
        </button>
        </div>   
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant)=>(
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
            <CardContainer resData = {restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
