import React, { useEffect, useState } from "react";
import objData from "../utils/mockData";
import CardContainer from "./CardContainer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([{
    "info": 
    {
      "id": "61823",
      "name": "Smokin' Joe's",
      "cloudinaryImageId": "azevobwtle9dlkw1xfxm",
      "cuisines": ["Pizzas"],
      "avgRating": 3.8,
      "avgRatingString": "3.8",
    }
  },
  {
    "info": 
    {
      "id": "117397",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "pft1dcdx8udfepmcnuty",
      "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      "avgRating": 4.2,
      "avgRatingString": "4.2",
    }
  },
  {
    "info": 
    {
      "id": "117398",
      "name": "Kulhad pizza",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": ["Pizzas", "Desserts", "Beverages"],
      "avgRating": 4.9,
      "avgRatingString": "4.2",
    }
  },
  {
    "info": 
    {
      "id": "117399",
      "name": "Ryan's Kitchen",
      "cloudinaryImageId": "s6fhwzl0tss0vgrqvcid",
      "cuisines": ["Desserts", "Beverages"],
      "avgRating": 1.2,
      "avgRatingString": "4.2",
    }
  },
  {
    "info": 
    {
      "id": "117797",
      "name": "Sardarjii",
      "cloudinaryImageId": "zrusx2rcjtsxpksm4lne",
      "cuisines": [  "Pastas", "Italian", "Desserts", "Beverages"],
      "avgRating": 2.2,
      "avgRatingString": "4.2",
    }
  }]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=> {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
   setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
