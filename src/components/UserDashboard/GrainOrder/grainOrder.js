import React from 'react';
import './grainOrder.css';

// grainOrder.js

const GrainOrderCard = () => {
    return (
        <div className="card">
            <h2 className="card-title">Grain Order</h2>
            <p className="card-content">Order your grains easily and quickly!</p>
            <button className="card-button">Order Now</button>
        </div>
    );
};

export default GrainOrderCard;