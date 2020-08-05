import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = (props, ...otherProps) => {
    // console.log(props.monsters);
    return(
        <div className="card-list">
            {props.monsters.map(monster => ( 
            <Card key={monster.id} monsters={monster} />
            ))}
        </div>
    )
}

export default CardList;
