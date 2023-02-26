import React, { useState } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {

	const [searched, setSearched]=useState('');

	function handleSearch(input)
	{
		setSearched(input)
	}
	
	return (
		<div className="App">
			<Nav />
			<Filter handleSearch={handleSearch} />
			<PigPen searched={searched} hogs={hogs}/>
		</div>
	);
}

export default App;
