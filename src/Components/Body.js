import objData from "../utils/mockData";
import CardContainer from "./CardContainer";

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
export default Body;