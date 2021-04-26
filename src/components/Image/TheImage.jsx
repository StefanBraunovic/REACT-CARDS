import React from 'react';


const TheImage =({src})=>{
    return (

        <div>
            <img src={`/images/${src}`} alt="slika"/>
        </div>
    )
}

export default TheImage;