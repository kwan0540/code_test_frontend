import React, { useState } from "react";
import "./character.card.css";
const StarshipCard = ({
  starship,
  searchPeople,
  searchFilm,
}) => {
  return (
    <div key={starship.name} className="character-card">
      <h2 className="character-name">{starship.name}</h2>
      <div className="character-details">
      <p>
          <strong>Name:</strong> {starship.name}
        </p>
        <p>
          <strong>MGLT:</strong> {starship.MGLT}
        </p>
        <p>
          <strong>Cargo capacity:</strong> {starship.cargo_capacity}
        </p>
        <p>
          <strong>Consumables:</strong> {starship.consumables}
        </p>
        <p>
          <strong>Cost in credits:</strong> {starship.cost_in_credits}
        </p>
        <p>
          <strong>Crew:</strong> {starship.crew}
        </p>
        <p>
          <strong>Hyperdrive rating:</strong> {starship.hyperdrive_rating}
        </p>
        <p>
          <strong>length:</strong> {starship.length}
        </p>
        <p>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Max atmosphering speed:</strong> {starship.max_atmosphering_speed}
        </p>
        <p>
          <strong>model:</strong> {starship.model}
        </p>
        <p>
          <strong>passengers:</strong> {starship.passengers}
        </p>
        <p>
          <strong>Starship class:</strong> {starship.starship_class}
        </p>
        <p>
          <strong>Films:</strong>
          {starship.films.length > 0 ? (
            <>
              {starship.films.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchFilm(starship.films)}
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
          <strong>Pilots:</strong>
          {starship.pilots.length > 0 ? (
            <>
              {starship.pilots.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchPeople(starship.pilots)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no pilots"
          )}
        </p>

        {/* Add more character details as needed */}
      </div>
      {/* Add more character details as needed */}
    </div>
  );
};

export default StarshipCard;
