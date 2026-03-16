import React from "react";

type Props = {
  favAnimals: string[];
};

const UserFavoriteAnimals = (props: Props) => {
  return (
    <ul>
      {props.favAnimals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  );
};

export default UserFavoriteAnimals;