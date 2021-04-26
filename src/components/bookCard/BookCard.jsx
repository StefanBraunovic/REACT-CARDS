import React from 'react';
import TheImage from '../Image/TheImage';
import './Book.css';


const BookCard = ({naslov,citat, src,godina_izdavanja, pisac})=>{
    return(
        <div className="container">
            <div className="kartica">
                <div className="imgBox">
               <TheImage src={src}/>

                    </div>
                <div className="details">
                    <h3>{naslov}</h3>
                    <p style={{ padding:4}}>release date:{godina_izdavanja}</p>
                    <br/>
                    <p>"{citat}"</p>
                    <br/>
                    <p style={{fontWeight:"bold"}}>{pisac}</p>
                </div>
                
            </div>
           
        </div>
    )
}
export default BookCard