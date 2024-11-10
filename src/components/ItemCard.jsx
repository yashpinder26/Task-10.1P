import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <img src={`/images/${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="rating">⭐ {item.rating}</div>
            <p>{item.author}</p>
        </div>
    );
};

export default ItemCard;
