import React from 'react';
import './Book.css';


const BookCard = ()=>{
    return(
        <div className="container">
            <div className="kartica">
                <div className="imgBox">
                    <img src="/images/book1.jpeg" alt=""/>

                    </div>
                <div className="details">
                    <h2>Naziv Knjige</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolorum ullam, neque tempore veniam voluptate libero aperiam exercitationem eos dignissimos minima, iusto cum ipsum consectetur harum dicta tenetur. Iste, accusamus.</p>
                </div>
                
            </div>
           
        </div>
    )
}
export default BookCard