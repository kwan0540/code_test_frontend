import React, { useState } from "react";
import "./character.card.css";
const FilmCard = ({
  film,
  searchStarship,
  searchVehicle,
  searchSpecie,
  searchCharacter
}) => {
  return (
    <div key={film.title} className="character-card">
      <h2 className="character-name">{film.title}</h2>
      <div className="character-details">
        <p>
          <strong>Title:</strong> {film.title}
        </p>
        <p>
          <strong>Director:</strong> {film.director}
        </p>
        <p>
          <strong>Episode id:</strong> {film.episode_id}
        </p>
        <p>
          <strong>Opening crawl:</strong> {film.opening_crawl}
        </p>
        <p>
          <strong>Producer:</strong> {film.producer}
        </p>
        <p>
          <strong>Release date:</strong> {film.release_date}
        </p>
        <p>
          <strong>characters:</strong>
          {film.characters.length > 0 ? (
            <>
              {film.characters.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchCharacter(film.characters)}
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
          {film.species.length > 0 ? (
            <>
              {film.species.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchSpecie(film.species)}
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
          {film.vehicles.length > 0 ? (
            <>
              {film.vehicles.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchVehicle(film.vehicles)}
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
          <strong>Starships:</strong>
          {film.starships.length > 0 ? (
            <>
              {film.starships.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchStarship(film.starships)}
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

export default FilmCard;
