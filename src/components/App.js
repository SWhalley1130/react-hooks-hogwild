import React, { useState } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {

	const [searched, setSearched]=useState("");
	const [searchedWeight, setSearchedWeight]=useState(null)
	const [selectedCategory, setSelectedCategory]=useState('All')
	
	return (
		<div className="App">
			<Nav />
			<Filter 
				handleSearchWeight={setSearchedWeight}
				handleSelectedCategory={setSelectedCategory} 
				handleSearch={setSearched} 
			/>
			<PigPen 
				searchedWeight={searchedWeight}
				selectedCategory={selectedCategory} 
				searched={searched} 
				hogs={hogs}
			/>
		</div>
	);
}

export default App;
