import React, {useState} from "react";
import Pig from "./Pig";

function PigPen({hogs, searched, selectedCategory})
{
    const [isChosenHog, setChosenHog]=useState('')
    

    function handleClick(name)
    {
        if (name===isChosenHog)
        {
            setChosenHog('')
        }
        else
        {
            setChosenHog(name)
        }
    }

    let sortedHogs = hogs.filter(hog=>{
        if(selectedCategory==="All") return true;
        return `${hog.greased}`===`${selectedCategory }`;
    })

    return (
        <div className="ui grid container">
            {sortedHogs.map(hog=>
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