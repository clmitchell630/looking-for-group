import React from 'react';
import './aboutus.css';

function AboutUs() {
    return (
        <div className="aboutContainer">
            <div className="about-group1">
                <h2>Looking For Group</h2>
                <h6>About Us.</h6>
            </div>
            <div className="about-group2">
                <p>Looking For Group is an app for individuals who enjoy playing video games, and are looking for others who share the same enjoyment.
                Our app is intended to match up individuals with one another and create a friendship through video games.
                </p>

                <p>Depending on a person's playstyle, some prefer a solo gaming experience, while others enjoy a shared gaming experience with other players.
                    This app specifically seeks to make it easier for gamers to group up together, make friendships, and facilitate the shared experience.
                </p>

                <p>In the gaming world currently, trying to find groups of new people to play with can be a challenge. Most multiplayer games have their own method to find another player for you; however, it is often for short term sessions to accomplish a goal and when you've completed it, its gg and goodbye.
                    We aim to extend that period with hopes of creating long lasting friendships with people you enjoy gaming with.
                    We aim to put all of this into a centralized location, so that we are the one stop shop for finding others to play with.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
