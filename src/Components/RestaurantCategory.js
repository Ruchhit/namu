import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    console.log(data);
    const[showItems,setShowItems] = useState(false);

    //function do toggle feature in accordion
 const handleClick = ()=>{
    if(showItems === false)
    {
        setShowItems(true);
    }
    else{
        setShowItems(false);
    }
 }
    return (
     <div className="bg-gray-200 shadow-lg p-4 m-2">
         {/* accordian Header - if we click on it we want to hide and show*/}
         <div className=  "flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <div>
          {/* accordion body */}
          {/* The && (logical AND) operator is used for conditional rendering.
           If showItems is true, the expression after && is evaluated and rendered; 
           otherwise, nothing is rendered. */}
         {showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>
    );
};
export default RestaurantCategory;