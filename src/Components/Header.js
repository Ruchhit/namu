import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    const[btnReact,setbtnReact]=useState('login');
    return(
        <div className='header'>
            <div className='log'>
                <img className='img'src= {LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={()=>
                     btnReact=== 'login' ? setbtnReact('logout') : setbtnReact('login')
                    }> {btnReact} </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;