import React from 'react';
import './StarWars.css';


const Character = props => {
  return (
    <div className='card'>
      <div className='name'>
        <h1>
          {props.charProp.name}
        </h1>
      </div>


      <div className='info'>
        <h2>BirthDate: {props.charProp.birth_year}</h2>
        <h2>Hair Color: {props.charProp.color}</h2>
        <h2>Height: {props.charProp.height}</h2>
        <h2>Gender: {props.charProp.gender}</h2>
      </div>

    </div>
  );
}


export default Character;