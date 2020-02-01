import React from 'react';
import './Hero.scss';
const hero = require('../../Assets/hero.jpg');

export default function Hero({profile}) {
  return (
    <section id="hero-container">
      {profile && <h3 id="welcome-banner">Welcome, {profile.email}!</h3>}
      <h2 id="hero-header">This guy is my hero</h2>
        <img id="hero-img" src={hero} alt="Elon Musk" />
      <p id="description">Elon Musk always seems to be pushing the limits of technology, whether it be creating the most advanced electric vehicles, designing reusable rockets, or building underground highways. Elon Musk has had a hand in some of the most exciting innovations of modern times. He is one of the most notable engineers and entrepreneurs of recent times. A few of the qualities of Mr. Musk I respect the most are his drive to accomplish difficult problems, his creative and experimental attitude, and his ability to manage working on several projects at once. I make it a point to translate similar mentalities to my work as a developer. By breaking up challenging problems into smaller, more manageable ones, I can handle demanding tasks more effectively. And by following a strict schedule, I am easily able to work on and complete several projects simultaneously by their specified deadlines. And by continuously learning about the most modern front end technologies, I can create stunning applications that push the envelope of the frameworks that they harness.</p>
    </section>
  );
}
