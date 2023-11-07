import { CDN_LINK } from "../utils/constants";

const CardContainer = (props) => {
    const { resData } = props;
    const {name,cuisines,avgRating,cloudinaryImageId}=resData;
  
    return (
      <div className='eee'>
        {resData.restaurants.slice(0, 2).map((restaurant, index) => (
          <div key={index} className='card'>
            <div>
              <img
                className='card-img'
                src={ CDN_LINK + restaurant.info.cloudinaryImageId }
                alt={restaurant.info.name}
              />
            </div>
            <h2>{restaurant.info.name}</h2>
            <h4>{restaurant.info.cuisines.join(", ")}</h4>
            <h4>Rating - {restaurant.info.avgRating}</h4>
          </div>
        ))}
      </div>
    );
  };
  export default CardContainer;