import React, { useState } from "react";
import { ScoreContext } from "./context/ScoreContext";
import { getRoutes } from "./util/getRoutes";
import "./App.css";

function App() {
	const [appState, setAppState] = useState({ questions: [], score: 0 });

	// Method to safely merge state updates
	const safeStateUpdate = (updateItem) =>{
		let newState = {...appState, updateItem};
		setAppState(newState);
	};

	return (
		<React.Fragment>
			<p className="srText">Welcome To Scientia - Test Your Knowledge</p>
			{/* Used Context But I Normally Avoid This Hook */}
			<ScoreContext.Provider
				value={{
					questions: appState.questions,
					score: appState.score,
					updateState: safeStateUpdate
				}}
			>
				<main>{getRoutes()}</main>
			</ScoreContext.Provider>
		</React.Fragment>
	);
}

export default App;