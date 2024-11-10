import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import FeaturedSection from './components/FeaturedSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

const articles = [
    { id: 1, name: "Naruto", description: "Hard work is worthless for those that don’t believe in themselves.", rating: 5, author: "Naruto", image: "article1.jpg" },
    { id: 2, name: "Bleach", description: "The betrayal you can see is trivial. What is truly fearsome, is the betrayal you don’t see...", rating: 5, author: "Aizen", image: "article2.jpg" },
    { id: 3, name: "Black Clover", description: "Being weak is nothing to be ashamed of... Staying weak is!!", rating: 5, author: "Fuegoleon Vermillion", image: "article3.jpg" }
];

const tutorials = [
    { id: 1, name: "Attack on Titan", description: "You can’t change anything without sacrifice", rating: 5, author: "Levi Ackerman", image: "tutorial1.jpg" },
    { id: 2, name: "My Hero Academia", description: "Don’t worry about what other people think. Hold your head up high and plunge forward.", rating: 5, author: "Izuku Midoriya", image: "tutorial2.jpg" },
    { id: 3, name: "Demon Slayer", description: "We are proud to live and die as human beings. Don't act like your worthless ideas are supreme and force them on others.", rating: 4.9, author: "GYOMEI HIMEJIMA ", image: "tutorial3.jpg" }
];

function App() {
    return (
        <div>
            <Header />
            <HeroImage />
            <FeaturedSection title="Featured Articles" items={articles} />
            <FeaturedSection title="Featured Tutorials" items={tutorials} />
            <SubscribeSection />
            <Footer />
        </div>
    );
}

export default App;
