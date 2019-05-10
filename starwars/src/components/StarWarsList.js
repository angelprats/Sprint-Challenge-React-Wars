import React from 'react';
import Character from './Character';

const StarWarsList = props => {
  console.log(props.starwarsChars)
  return (
    <div>
      {props.starwarsChars.map(charsMap => (
        <Character key={charsMap.name}
          charProp={charsMap} />
      ))};
    </div>
  )
}


export default StarWarsList;