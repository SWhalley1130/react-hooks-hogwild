

function Filter({handleSearch, handleSelectedCategory})
{
    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}/>
            <select onChange={(e)=>handleSelectedCategory(e.target.value)}>
                <option value={"All"}>Filter by greasiness</option>
                <option value={true}>Greased</option>
                <option value={false}>Ungreased</option>
            </select>
            <br />
        </div>
    )
}

export default Filter;