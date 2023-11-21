import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const Header = ()=>{
    const[btnReact,setbtnReact]=useState('login');
    const status = useOnlineStatus();

    const cartItems = useSelector((store)=>store.cart.items);
    
    const {loggedInUser} = useContext(userContext);
    return(
        <div className= 'flex justify-between bg-amber-100 shadow-lg'>
            <div className="p-2">
                <img className='w-28' src= {LOGO_URL}/>
            </div>
            <div className='flex items-center m-2'>
                <ul className="flex">
                    <li className="px-4">Online Status:{(status==true)?"💚":" 🔴"}</li>
                    <li className="px-4"><Link to={'/'}>Home</Link></li>
                    <li className="px-4"><Link to={'/about'}> About us</Link></li>
                    <li className="px-4"><Link to={'/contact'}> Contact us</Link></li>
                    <li className="px-4"><Link to ={'/grocery'}> Grocery </Link></li>
                    <li className="px-4"><Link to ={'/cart'}><FontAwesomeIcon icon={faShoppingCart} />({cartItems.length}) </Link></li>
                    <button className="btn" onClick={()=>
                     btnReact === 'login' ? setbtnReact('logout') : setbtnReact('login')
                    }> {btnReact} </button>
                    <li className="px-4">Logged in user : {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
