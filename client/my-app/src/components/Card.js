import React from "react";
import './Card.css';

function Card(props){
    return <div className="container" data-testid='test-1'>
    <div className="card">
        <img src="https://via.placeholder.com/150" alt="Card " className="card-img"/>
        <div className="card-content">
            <h2 className="card-title">Card Title</h2>
            <p className="card-description">This is a description of the card. It provides some details about the content of the card.</p>
        </div>
    </div>
</div>
}
export default Card;