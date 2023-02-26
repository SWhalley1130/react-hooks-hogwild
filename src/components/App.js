import React, { useState } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {

	const [searched, setSearched]=useState("");
	const [selectedCategory, setSelectedCategory]=useState('All')

	function handleSearch(input)
	{
		setSearched(input)
	}

	function handleSelectedCategory(input)
	{
		setSelectedCategory(input)
	}
	
	return (
		<div className="App">
			<Nav />
			<Filter 
				handleSelectedCategory={handleSelectedCategory} 
				handleSearch={handleSearch} 
			/>
			<PigPen 
				selectedCategory={selectedCategory} 
				searched={searched} 
				hogs={hogs}
			/>
		</div>
	);
}

export default App;
