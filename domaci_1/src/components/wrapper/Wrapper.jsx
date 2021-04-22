import React from 'react';


const Wrapper = ({children }) =>{
    
    return (
        <div style={{display:'grid',  gridTemplateColumns:'1fr 1fr 1fr'}}>

{children}
    </div>

    )

}

export default Wrapper

