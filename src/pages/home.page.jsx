import React, { useState } from "react";
import axios from "axios";

import "./homepage.css"; // Import custom CSS file for styling
import CharacterCard from "../components/character.card";
import StarshipCard from "../components/starship.card";
import FilmCard from "../components/film.card";
import SpecieCard from "../components/specie.card";
import PlanetCard from "../components/planet.card";
import VehicleCard from "../components/vehicle.card";

const HomePage = () => {
  const [character, setCharacter] = useState("");
  const [loading, setLoading] = useState(false);
  const [characterResult, setCharacterResult] = useState([]);
  const [starshipResult, setStarshipResult] = useState([]);
  const [vehicleResult, setVehicleResult] = useState([]);
  const [spcieResult, setSpecieResult] = useState([]);
  const [filmResult, setFilmResult] = useState([]);
  const [homeworldResult, setHomeworldResult] = useState([]);

  const searchCharacter = async (items = []) => {
    try {
        setLoading(true)
      if (items.length > 0) {
        const result = [];
        for (const item of items) {
          const number = item.match(/\d+/);
          let id = Number(number[0]);
          const response = await axios.get(
            `http://localhost:3001/people?id=${id}`
          );
          if (response.data.length == 0) {
            continue;
          }
          result.push(response.data);
        }
        setStarshipResult([]);
        setSpecieResult([]);
        setHomeworldResult([]);
        setFilmResult([]);
        setVehicleResult([]);
        setCharacterResult(result);
        setLoading(false)
      } else {
        const response = await axios.get(
          `http://localhost:3001/people?name=${character}`
        );
        setStarshipResult([]);
        setSpecieResult([]);
        setHomeworldResult([]);
        setFilmResult([]);
        setVehicleResult([]);
        setCharacterResult(response.data);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchStarship = async (items) => {
    try {
        setLoading(true)
      const result = [];
      for (const item of items) {
        const number = item.match(/\d+/);
        let id = Number(number[0]);
        const response = await axios.get(
          `http://localhost:3001/starship?id=${id}`
        );
        result.push(response.data);
      }
      setCharacterResult([]);
      setStarshipResult([]);
      setSpecieResult([]);
      setHomeworldResult([]);
      setFilmResult([]);
      setVehicleResult([]);
      setStarshipResult(result);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const searchVehicle = async (items) => {
    try {
        setLoading(true)
      const result = [];
      for (const item of items) {
        const number = item.match(/\d+/);
        let id = Number(number[0]);
        const response = await axios.get(
          `http://localhost:3001/vehicle?id=${id}`
        );
        result.push(response.data);
      }
      setCharacterResult([]);
      setStarshipResult([]);
      setSpecieResult([]);
      setHomeworldResult([]);
      setFilmResult([]);
      setVehicleResult([]);
      setVehicleResult(result);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const searchSpecie = async (items) => {
    try {
        setLoading(true)
      const result = [];
      for (const item of items) {
        const number = item.match(/\d+/);
        let id = Number(number[0]);
        const response = await axios.get(
          `http://localhost:3001/specie?id=${id}`
        );
        result.push(response.data);
      }
      setCharacterResult([]);
      setStarshipResult([]);
      setSpecieResult([]);
      setHomeworldResult([]);
      setFilmResult([]);
      setVehicleResult([]);
      setSpecieResult(result);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const searchFilm = async (items) => {
    try {
        setLoading(true)
      const result = [];
      for (const item of items) {
        const number = item.match(/\d+/);
        let id = Number(number[0]);
        const response = await axios.get(`http://localhost:3001/film?id=${id}`);
        result.push(response.data);
      }
      setCharacterResult([]);
      setStarshipResult([]);
      setSpecieResult([]);
      setHomeworldResult([]);
      setFilmResult([]);
      setVehicleResult([]);
      setFilmResult(result);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const searchHomeworld = async (item) => {
    try {
        setLoading(true)
      const number = item.match(/\d+/);
      let id = Number(number[0]);
      const response = await axios.get(`http://localhost:3001/planet?id=${id}`);
      setCharacterResult([]);
      setStarshipResult([]);
      setSpecieResult([]);
      setFilmResult([]);
      setVehicleResult([]);
      setHomeworldResult([response.data]);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter a Star Wars character name"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
        <button className="search-button" onClick={searchCharacter}>
          Search
        </button>
      </div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-message">Loading...</p>
        </div>
      ) : (
        <div className="results-container">
          {characterResult.map((character) => (
            <CharacterCard
              character={character}
              searchStarship={searchStarship}
              searchFilm={searchFilm}
              searchHomeworld={searchHomeworld}
              searchSpecie={searchSpecie}
              searchVehicle={searchVehicle}
            />
          ))}
          {starshipResult.map((starship) => (
            <StarshipCard
              starship={starship}
              searchFilm={searchFilm}
              searchPeople={searchCharacter}
            />
          ))}
          {filmResult.map((film) => (
            <FilmCard
              film={film}
              searchStarship={searchStarship}
              searchCharacter={searchCharacter}
              searchHomeworld={searchHomeworld}
              searchSpecie={searchSpecie}
              searchVehicle={searchVehicle}
            />
          ))}
          {vehicleResult.map((vehicle) => (
            <VehicleCard
              vehicle={vehicle}
              searchFilm={searchFilm}
              searchCharacter={searchCharacter}
            />
          ))}
          {spcieResult.map((specie) => (
            <SpecieCard
              specie={specie}
              searchFilm={searchFilm}
              searchCharacter={searchCharacter}
            />
          ))}
          {homeworldResult.map((planet) => (
            <PlanetCard
              planet={planet}
              searchFilm={searchFilm}
              searchCharacter={searchCharacter}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
