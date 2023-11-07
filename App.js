import React from 'react';
import ReactDOM from 'react-dom';

// core way of creating an element :-
// const head= React.createElement('h1',{},'hwllow ji kya haal chal');
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(head);

// to create an alement using jsx :-
// const head = <h1 id='rooty'>hello jii got made by jsx</h1>
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(head);

// creating a new componenet :-
// const Heading1 = ()=>{
//     return <h1 className='head'>heading from react component</h1>;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading/>);


// nested jsx code :-
// const Head = () =>(
//     <div id='container'>
//         <h2> this is a heading 2 under div</h2>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Head/>);


// component composition (rendering one component into other) :-
// const Heading1 = () => <h1 className='head'>heading from react component</h1>;
// const Heading2 = () =>( 
//     <div id='firstId'> 
//     <Heading1/>
//     <h2> this is another heading</h2>
//     </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading2/>);

// food ordering app

const Header = ()=>{
    return(
        <div className='header'>
            <div className='log'>
                <img className='img'src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
const CardContainer = (props) => {
    const { resData } = props;
  
    return (
      <div className='eee'>
        {resData.restaurants.slice(0, 2).map((restaurant, index) => (
          <div key={index} className='card'>
            <div>
              <img
                className='card-img'
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  restaurant.info.cloudinaryImageId
                }
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
  
 // api data get from swiggy
 //This code represents an array of two restaurants within the objData object. Each restaurant has its own "info" properties with details. 
 const objData = {
    "restaurants": [
      {
        "info": {
          "id": "61823",
          "name": "Smokin' Joe's",
          "city": "5",
          "slugs": {
            "restaurant": "smokin-joes-reclamation-bandra-west-bandra-west",
            "city": "mumbai"
          },
          "cloudinaryImageId": "azevobwtle9dlkw1xfxm",
          "address": "Shop no 8 Wing A, Ground floor, RIZVI MAHAL, Water field road, near BHA - BHA hospital, bandra west",
          "locality": "Hill Road",
          "areaName": "Bandra West",
          "costForTwo": "30000",
          "costForTwoMessage": "₹300 FOR TWO",
          "cuisines": ["Pizzas"],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "61823",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 9300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 9300,
            "title": "Delivery Charge",
            "amount": "9300"
          },
          "avgRatingString": "3.8",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=9127401~p=1~eid=0000018b-a70b-d079-0540-788d0009010c~srvts=1699314651257",
          "sla": {
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 6.4,
            "serviceability": "SERVICEABLE",
            "rainMode": "RAIN_MODE_NONE",
            "slaString": "33 MINS",
            "lastMileTravelString": "6.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          }
        }
      },
      {
        "info": {
          "id": "117397",
          "name": "La Pino'z Pizza",
          "city": "5",
          "slugs": {
            "restaurant": "la-pinoz-pizza-sion-sion-bhakti-park",
            "city": "mumbai"
          },
          "cloudinaryImageId": "pft1dcdx8udfepmcnuty",
          "address": "La Pino'z Pizza, 8/A - 1, Sindhi Colony, Road No. 24, Sion, Mumbai",
          "locality": "Sion",
          "areaName": "Sion",
          "costForTwo": "55000",
          "costForTwoMessage": "₹550 FOR TWO",
          "cuisines": ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "117397",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 5700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 5700,
            "title": "Delivery Charge",
            "amount": "5700"
          },
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "rainMode": "RAIN_MODE_NONE",
            "slaString": "29 MINS",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          }
        }
      }
    ]
  };
  
  

const Body =()=>{
    return(
        <div className='body'>
            <div className='search'>
                search
            </div>
            <div className='res-container'>
                <CardContainer resData={objData}/>
            </div> 
        </div>
    )
}



const AppLayout = ()=>{
    return (
        <div className='app'>
              <Header/>
              <Body/>
        </div>
       
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)