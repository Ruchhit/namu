import React, { useEffect, useState } from "react";
import objData from "../utils/mockData";
import CardContainer from "./CardContainer";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const[filteredRestaurant , setFilteredRestaurant] = useState([]);
  const [searchText,setsearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=> {
   const data = await fetch(SWIGGY_API);
   const json = await data.json();
   setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
