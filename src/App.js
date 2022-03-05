import React, { useState } from "react";
import { ScoreContext } from "./context/ScoreContext";
import { getRoutes } from "./util/getRoutes";
import Container from "@material-ui/core/Container";

function App() {
	const [appState, setAppState] = useState({ questions: [], score: 0, count: 1 });

	// Method to safely merge state updates
	const safeStateUpdate = (updateObject) => {
		let newState = {
			...appState,
			...updateObject
		};
		setAppState(newState);
	};

	return (
		<React.Fragment>
			{/* Used Context But I Normally Avoid This Hook */}
			<ScoreContext.Provider
				value={{
					questions: appState.questions,
					score: appState.score,
					count: appState.count,
					updateState: safeStateUpdate
				}}
			>
				<main>
					<Container maxWidth={"lg"} disableGutters={false}>
						{/* Accessibility Landmarks and Text For SRs */}
						<p className="srText">Welcome To Scientia - Test Your Knowledge</p>
						{getRoutes()}
					</Container>
				</main>
			</ScoreContext.Provider>
		</React.Fragment>
	);
}

export default App;
