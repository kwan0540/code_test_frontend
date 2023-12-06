import React, { useState } from "react";
import "./character.card.css";
const PlanetCard = ({
  planet,
  searchCharacter,
  searchFilm,
}) => {
  return (
    <div key={planet.name} className="character-card">
      <h2 className="character-name">{planet.name}</h2>
      <div className="character-details">
        <p>
          <strong>Name:</strong> {planet.name}
        </p>
        <p>
          <strong>Rotation period:</strong> {planet.rotation_period}
        </p>
        <p>
          <strong>Orbital period:</strong> {planet.orbital_period}
        </p>
        <p>
          <strong>Diameter:</strong> {planet.diameter}
        </p>
        <p>
          <strong>Climate:</strong> {planet.climate}
        </p>
        <p>
          <strong>Gravity:</strong> {planet.gravity}
        </p>
        <p>
          <strong>Terrain:</strong> {planet.terrain}
        </p>
        <p>
          <strong>Surface_water:</strong> {planet.surface_water}
        </p>
        <p>
          <strong>Population:</strong> {planet.population}
        </p>
        <p>
          <strong>Residents:</strong>
          {planet.residents.length > 0 ? (
            <>
              {planet.residents.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchCharacter(planet.residents)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no residents"
          )}
        </p>
        <p>
          <strong>Films:</strong>
          {planet.films.length > 0 ? (
            <>
              {planet.films.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchFilm(planet.films)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no films"
          )}
        </p>
        {/* Add more character details as needed */}
      </div>
      {/* Add more character details as needed */}
    </div>
  );
};

export default PlanetCard;
