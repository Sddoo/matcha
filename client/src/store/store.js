import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

const defaultState = {
    token: "",
	profileId: ""
}

const defaultAction = {type: "NONE", payload: ""};

const reducer = (state = defaultState, action = defaultAction) => {
    switch (action.type) {
        case "AUTH": {
            return {...state, ...action.payload};
        }
		default: {
			return {...state}
		}
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

