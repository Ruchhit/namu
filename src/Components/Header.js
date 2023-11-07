import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    return(
        <div className='header'>
            <div className='log'>
                <img className='img'src= {LOGO_URL}/>
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
export default Header;