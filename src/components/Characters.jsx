import React, { useEffect } from "react";

const Characters = (props) => {
  let filtredCharacters = [];

  filtredCharacters = props.characters.filter(
    (character) =>
      character.name.toLowerCase().includes(props.sInput.toLowerCase()) &&
      character.status.includes(props.status)
  );

  console.log(filtredCharacters);
  console.log(props);

  if (filtredCharacters.length > 0) {
    return (
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8 ">
        {filtredCharacters.map((character, index) => {
          return (
            <li className="rounded-lg shadow-xl" key={index}>
              <img src={character.image} />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p> No Characters Available</p>;
  }
};

export default Characters;
