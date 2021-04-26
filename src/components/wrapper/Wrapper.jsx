import React from 'react';
import './Wrapper.css';


const Wrapper = ({children }) =>{
    
    return (

            <div className="glowing" >
{children}
<span Style="--i:1"></span>
<span Style="--i:2"></span>
<span Style="--i:3"></span>
    </div>
 

    )

}

export default Wrapper

