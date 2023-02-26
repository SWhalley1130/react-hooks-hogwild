import React from "react";

function Pig({name, image, handleClick, isChosenHog, specialty, weight, greased, medal})
{

    return (
        <div 
            id={name}
            onClick={() => handleClick(name)}
            className="ui eight wide column ui card"
        >
            {
                isChosenHog === name ? 
                    <>
                        <h3>{name}</h3>
                        <p>Specialty: {specialty}</p>
                        <p>Greased: {greased ? "Yes" : "No"}</p>
                        <p>Weight: {weight}</p>
                        <p>Highest Medal: {medal}</p>
                    </>
                    :
                    <>
                        <h3>{name}</h3>
                        <img style={{'width':'inherit', 'height':'inherit'}} src={image} alt="Pig Pic"/>
                    </>
            }
        </div>
    )
}

export default Pig;