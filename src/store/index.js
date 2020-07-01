import { createStore } from "redux";
import { myReducer } from  "../reducers";
const initialState = { tech: "React " };
export const store = createStore(myReducer, initialState);