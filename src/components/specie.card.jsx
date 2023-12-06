import React, { useState } from "react";
import "./character.card.css";
const SpecieCard = ({ specie, searchCharacter, searchFilm }) => {
  return (
    <div key={specie.name} className="character-card">
      <h2 className="character-name">{specie.name}</h2>
      <div className="character-details">
        <p>
          <strong>Name:</strong> {specie.name}
        </p>
        <p>
          <strong>Classification:</strong> {specie.classification}
        </p>
        <p>
          <strong>Designation:</strong> {specie.designation}
        </p>
        <p>
          <strong>Average height:</strong> {specie.average_height}
        </p>
        <p>
          <strong>Skin colors:</strong> {specie.skin_colors}
        </p>
        <p>
          <strong>Hair colors:</strong> {specie.hair_colors}
        </p>
        <p>
          <strong>Eye colors:</strong> {specie.eye_colors}
        </p>
        <p>
          <strong>Average lifespan:</strong> {specie.average_lifespan}
        </p>
        <p>
          <strong>Language:</strong> {specie.language}
        </p>
        <p>
          <strong>Films:</strong>
          {specie.films.length > 0 ? (
            <>
              {specie.films.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchFilm(specie.films)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no films"
          )}
        </p>
        <p>
          <strong>Homeworld:</strong>
          {specie.homeworld ? (
            <button
              className="show-more-button"
              onClick={() => searchFilm(specie.homeworld)}
            >
              Show More
            </button>
          ) : (
            "  no homeworld"
          )}
        </p>
        <p>
          <strong>People:</strong>
          {specie.people.length > 0 ? (
            <>
              {specie.people.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchCharacter(specie.people)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no peoples"
          )}
        </p>
        {/* Add more character details as needed */}
      </div>
      {/* Add more character details as needed */}
    </div>
  );
};

export default SpecieCard;
