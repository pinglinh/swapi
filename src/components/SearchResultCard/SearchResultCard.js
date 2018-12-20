import React from "react";
import "./SearchResultCard.scss";

const SearchResultCard = ({ personInfo }) => {
  return (
    <div className="person-info">
      <ul>
        <li>Name: {personInfo.name}</li>
        <li>Height: {personInfo.height}</li>
        <li>Mass: {personInfo.mass}</li>
        <li>Hair colour: {personInfo.hair_color}</li>
        <li>Skin colour: {personInfo.skin_color}</li>
        <li>Eye colour: {personInfo.eye_color}</li>
        <li>Birth year: {personInfo.birth_year}</li>
        <li>Homeworld: {personInfo.homeworld}</li>
        <li>Species: {personInfo.species}</li>
        <li>
          Vehicles:
          {personInfo.vehicles.map(vehicle => {
            return (
              <ul>
                <li>{vehicle}</li>
              </ul>
            );
          })}
        </li>
        <li>
          Starships:
          {personInfo.starships.map(starship => {
            return (
              <ul>
                <li>{starship}</li>
              </ul>
            );
          })}
        </li>
        <li>
          URL: <a href={personInfo.url}>Click here</a>
        </li>
      </ul>
    </div>
  );
};

export default SearchResultCard;
