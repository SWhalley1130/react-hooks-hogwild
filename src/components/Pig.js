import React from "react";

function Pig({name, image})
{
    return (
        <div className="ui eight wide column ui card" style={{'margin-top':'1 em 0'}}>
            <h3>{name}</h3>
            <img style={{'width':'inherit', 'height':'inherit'}} src={image} alt="Pig Pic"/>
        </div>
    )
}

export default Pig;