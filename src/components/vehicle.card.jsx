import React, { useState } from "react";
import "./character.card.css";
const VehicleCard = ({
  vehicle,
  searchCharacter,
  searchFilm,
}) => {
  return (
    <div key={vehicle.name} className="character-card">
      <h2 className="character-name">{vehicle.name}</h2>
      <div className="character-details">
        <p>
          <strong>Name:</strong> {vehicle.name}
        </p>
        <p>
          <strong>Model:</strong> {vehicle.model}
        </p>
        <p>
          <strong>Manufacturer:</strong> {vehicle.manufacturer}
        </p>
        <p>
          <strong>Cost in credits:</strong> {vehicle.cost_in_credits}
        </p>
        <p>
          <strong>Length:</strong> {vehicle.length}
        </p>
        <p>
          <strong>MNax atmosphering speed:</strong> {vehicle.max_atmosphering_speed}
        </p>
        <p>
          <strong>Crew:</strong> {vehicle.crew}
        </p>
        <p>
          <strong>Passengers:</strong> {vehicle.passengers}
        </p>
        <p>
          <strong>Cargo capacity:</strong> {vehicle.cargo_capacity}
        </p>
        <p>
          <strong>Consumables:</strong> {vehicle.consumables}
        </p>
        <p>
          <strong>Vehicle class:</strong> {vehicle.vehicle_class}
        </p>
        <p>
          <strong>Films:</strong>
          {vehicle.films.length > 0 ? (
            <>
              {vehicle.films.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchFilm(vehicle.films)}
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
          {vehicle.pilots.length > 0 ? (
            <>
              {vehicle.pilots.length > 0 && (
                <button
                  className="show-more-button"
                  onClick={() => searchCharacter(vehicle.pilots)}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            "  no vehicles"
          )}
        </p>
        {/* Add more character details as needed */}
      </div>
      {/* Add more character details as needed */}
    </div>
  );
};

export default VehicleCard;
