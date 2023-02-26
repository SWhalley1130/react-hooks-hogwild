import react from "react";

function Filter({handleSearch})
{
    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}/>
            <br />
        </div>
    )
}

export default Filter;