import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Basketball Team</h1>
      <div className="team">
        <div className="team-row">
          <BasketballPlayerCard
            name="LeBron James"
            image="/lebron.jpg"
            position="Forward"
            stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
          />
          <BasketballPlayerCard
            name="Stephen Curry"
            image="/curry.jpg"
            position="Guard"
            stats={{ pointsPerGame: 27.3, assistsPerGame: 6.2, reboundsPerGame: 5.3 }}
          />
          <BasketballPlayerCard
            name="Kevin Durant"
            image="/durant.jpg"
            position="Forward"
            stats={{ pointsPerGame: 27.0, assistsPerGame: 5.4, reboundsPerGame: 7.1 }}
          />
        </div>
        <div className="team-row">
          <BasketballPlayerCard
            name="James Harden"
            image="/harden.jpg"
            position="Guard"
            stats={{ pointsPerGame: 25.0, assistsPerGame: 8.5, reboundsPerGame: 6.8 }}
          />
          <BasketballPlayerCard
            name="Anthony Davis"
            image="/davis.jpg"
            position="Center"
            stats={{ pointsPerGame: 23.2, assistsPerGame: 3.1, reboundsPerGame: 9.9 }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
