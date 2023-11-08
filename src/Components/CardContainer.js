import { CDN_LINK } from "../utils/constants";

const CardContainer = (props) => {
  const { resData } = props;

  return (
    <div className='eee'>
      {
        resData.slice(0, 5).map((res, index) => (
        <div key={index} className='card'>
          <div>
            <img
              className='card-img'
              src={CDN_LINK + res.info.cloudinaryImageId}
              alt={res.info.name}
            />
          </div>
          <h2>{res.info.name}</h2>
          <h4>{res.info.cuisines.join(", ")}</h4>
          <h4>Rating - {res.info.avgRating}</h4>
        </div>
      ))
      }
    </div>
  );
};

export default CardContainer;
