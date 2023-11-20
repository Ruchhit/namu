import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = ()=>{
    const[btnReact,setbtnReact]=useState('login');
    const status = useOnlineStatus();

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