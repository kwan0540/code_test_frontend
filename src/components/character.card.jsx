import React, { useState } from "react";
import "./character.card.css";
const CharacterCard = ({
  character,
  searchStarship,
  searchVehicle,
  searchSpecie,
  searchHomeworld,
  searchFilm,
}) => {
  return (
    <div key={character.name} className="character-card">
      <h2 className="character-name">{character.name}</h2>
      <div className="character-details">
        <p>
          <strong>Height:</strong> {character.height}
        </p>
        <p>
          <strong>Mass:</strong> {character.mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {character.hair_color}
        </p>
        <p>
          <strong>Skin Color:</strong> {character.skin_color}
        </p>
        <p>
          <strong>Eye Color:</strong> {character.eye_color}
        </p>
        <p>
          <strong>Birth Year:</strong> {character.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Films:</strong>
          {character.films.length > 0 ? (
            <>
              {character.films && (
                <button
                  className="show-more-button"
                  onClick={() => searchFilm(character.films)}
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
          <strong>Species:</strong>
          {character.species.length > 0 ? (
            <>
              {character.species && (
                <button
                  className="show-more-button"
                  onClick={() => searchSpecie(character.species)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no species"
          )}
        </p>
        <p>
          <strong>Vehicles:</strong>
          {character.vehicles.length > 0? (
            <>
              {character.vehicles && (
                <button
                  className="show-more-button"
                  onClick={() => searchVehicle(character.vehicles)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no vehicles"
          )}
        </p>
        <p>
          <strong>Homeworld:</strong>
          {character.homeworld ? (
              <button
                  className="show-more-button"
                  onClick={() => searchHomeworld(character.homeworld)}
                >
                  Show More
                </button>
          ) : (
            "  no homeworld"
          )}
        </p>
        <p>
          <strong>Starships:</strong>
          {character.starships.length > 0 ? (
            <>
              {character.starships && (
                <button
                  className="show-more-button"
                  onClick={() => searchStarship(character.starships)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no starships"
          )}
        </p>

        {/* Add more character details as needed */}
      </div>
      {/* Add more character details as needed */}
    </div>
  );
};

export default CharacterCard;
