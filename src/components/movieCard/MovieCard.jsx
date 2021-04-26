import React from 'react';
import './movieCard.css';
import TheImage from '../Image/TheImage';


const MovieCard = ({src,name,director,type,actors,date}) =>{

    return(
        <div className="box">
        
        <div className="box-img">
            <TheImage src={src}/>
        </div>
        <div className="content">
            <h3>{name}</h3>
            <br/>
            <h4>Director: {director}</h4>
            <br/>
            <p>Genre: {type} </p>
            <br/>
            <p>Cast: {actors} and  MORE...</p>
            <br/>
            <p>Year: {date} </p>
        </div>
        
    </div>
)






}


export default MovieCard;