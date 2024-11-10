import React from 'react';
import ItemCard from './ItemCard';
import './FeaturedSection.css';

const FeaturedSection = ({ title, items }) => {
    return (
        <section>
            <h2>{title}</h2>
            <div className="item-grid">
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
            <button>See all {title.toLowerCase()}</button>
        </section>
    );
};

export default FeaturedSection;
