import React from 'react';
import './idCard.css';
import TheImage from '../Image/TheImage'


const IdCard = ({name,surname,date,city,src}) =>{

return(
   
<div className="container">
        
    <div className="card">
        <div className="content">
            <div className="imgBx">
                <img src="" alt=""/>
                <TheImage src={src}/>
            </div>
            <div className="contentBx">
                <h3>{name} {surname}</h3>
            </div>
        </div>
        <ul className="sci">
        <li Style="--i:4" aria-hidden="true">
           Birthday: {date}
        </li>
        <li Style="--i:4" aria-hidden="true">
           City: {city}
        </li>
    </ul>
    </div>
  
    </div>



   
 
    
    

)






}


export default IdCard;