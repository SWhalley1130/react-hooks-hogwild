

function Filter({handleSearch, handleSelectedCategory, handleSearchWeight})
{
    return (
        <div>
            <input type="text" placeholder="Search by name" onChange={(e)=>handleSearch(e.target.value)}/>
            <input type="number" placeholder="Search by weight" onChange={(e)=>handleSearchWeight(e.target.value)} />
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