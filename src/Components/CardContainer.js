import { CDN_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const CardContainer = (props) => {
  const { resData } = props;

  return (
    <div className="eee">
      {resData.slice(0, 15).map((res, index) => (
        <Link to={`/restaurants/${res.info.id}`} key={index} className="card">
          <div>
            <img
              className="card-img"
              src={CDN_LINK + res.info.cloudinaryImageId}
              alt={res.info.name}
            />
          </div>
          <h2>{res.info.name}</h2>
          <h4>{res.info.cuisines.join(", ")}</h4>
          <h4>Rating - {res.info.avgRating}</h4>
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
