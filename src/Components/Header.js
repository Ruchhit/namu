import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
    const[btnReact,setbtnReact]=useState('login');
    return(
        <div className='header'>
            <div className='log'>
                <img className='img'src= {LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}> About us</Link></li>
                    <li><Link to={'/contact'}> Contact us</Link></li>
                    
                    <button className="btn" onClick={()=>
                     btnReact === 'login' ? setbtnReact('logout') : setbtnReact('login')
                    }> {btnReact} </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;