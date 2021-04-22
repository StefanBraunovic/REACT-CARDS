import React from 'react';
import './movieCard.css';


const MovieCard = () =>{

return(
    <div className="box">
        <div className="box-img">
            <img src="/images/movie1.jpg" alt=""/>
        </div>
        <div className="content">
            <h3>Avengers</h3>
            <br/>
            <h4>Reziser: Stefan Braunovic</h4>
            <br/>
            <p>Zanr: Adventure/Action</p>
            <br/>
            <p>Glumci:  Scarlett Johansson, Robert Downey, Jr., Chris Evans, MORE</p>
        </div>
        
    </div>
)






}


export default MovieCard;