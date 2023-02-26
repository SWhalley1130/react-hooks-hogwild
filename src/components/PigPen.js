import React, {useState} from "react";
import Pig from "./Pig";

function PigPen({hogs, searched})
{
    const [isChosenHog, setChosenHog]=useState('')
    

    function handleClick(id)
    {
        console.log('click handled', id)
        setChosenHog(id)
    }

    return (
        <div className="ui grid container">
            {hogs.map(hog=>
                hog.name.toLowerCase().includes(searched.toLowerCase()) ? 
                <Pig 
                    isChosenHog={isChosenHog} 
                    key={hog.name} 
                    handleClick={handleClick} 
                    name={hog.name} 
                    image={hog.image} 
                    specialty={hog.specialty} 
                    weight={hog.weight} 
                    greased={hog.greased} 
                    medal={hog["highest medal achieved"]} />
                :
                null
                )}
        </div>
    )

}

export default PigPen;