import React from 'react';
import './Card.css';

const Card = ({id, name}) => {
   return(
       <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
            <h1>{name}</h1>
            {/* <p>{props.monsters.email}</p> */}
       </div>
   )
   
}

export default Card;