import React, { useState } from "react";
import { ScoreContext } from "./context/ScoreContext";
import { getRoutes } from "./util/getRoutes";
import Container from "@material-ui/core/Container";

function App() {
	const [appState, setAppState] = useState({ questions: ["What is What when what is upside down?"], score: 0, count: 1 });

	// Method to safely merge state updates
	const safeStateUpdate = (updateItem) => {
		let newState = { ...appState, updateItem };
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
					<Container maxWidth={"lg"} disableGutters={true}>
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
