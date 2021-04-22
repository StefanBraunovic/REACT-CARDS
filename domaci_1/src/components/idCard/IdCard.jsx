import React from 'react';
import './idCard.css';


const IdCard = () =>{

return(
    <section>
    <div className="container">
    <div className="card">
        <div className="content">
            <div className="imgBx">
                <img src="/images/user_1.jpg" alt=""/>
            </div>
            <div className="contentBx">
                <h3>Stefan Braunovic<br/><span>Frontend DEveloper</span></h3>
            </div>
        </div>
        <ul className="sci">
        <li Style="--i:1" aria-hidden="true">
            Datum rodjenja: 15.05.1993
        </li>
        <li Style="--i:1" aria-hidden="true">
            Grad: Podgorica
        </li>
    </ul>
    </div>
  
    </div>

</section>


   
 
    
    

)






}


export default IdCard;