import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

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

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredData);
          }}
        >
          Filter Top Rated restaurants!!
        </button>
        <div className="search">
            <input type="text" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
                const filteredRes = listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFilteredRestaurant(filteredRes);
            }}>search</button>
        </div>
      </div>
      <div className="res-container">
        {/* Assuming CardContainer accepts the list of restaurants as props */}
        <CardContainer resData={filteredRestaurant} />
      </div>
    </div>
  );
};

export default Body;
