import { createContext } from "react";

export const ScoreContext = createContext({
	questions: [],
	score: 0,
	count: 0,
	updateState: null
});
