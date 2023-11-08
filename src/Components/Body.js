import React, { useEffect, useState } from "react";
import objData from "../utils/mockData";
import CardContainer from "./CardContainer";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=> {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
   setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
 if(listOfRestaurants.length === 0)
 {
    // return <h1> LOADING .....</h1>
    return <Shimmer/>
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
      </div>
      <div className="res-container">
        {/* Assuming CardContainer accepts the list of restaurants as props */}
        <CardContainer resData={listOfRestaurants} />
      </div>
    </div>
  );
};

export default Body;
