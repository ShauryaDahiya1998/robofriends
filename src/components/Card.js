import React from 'react';

const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt='Show here' />
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}

export default Card;