import react from "react";
import Pig from "./Pig";

function PigPen({hogs})
{
    return (
        <div className="ui grid container">
            {hogs.map(hog=>
                <Pig name={hog.name} image={hog.image}/>)}
        </div>
    )

}

export default PigPen;