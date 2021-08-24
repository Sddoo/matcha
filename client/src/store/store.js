import {createStore} from "redux";

const defaultState = {
    isAuth: false,
}

const defaultAction = {type: "NONE", payload: ""};

const reducer = (state = defaultState, action = defaultAction) => {
    switch (action.type) {
        case "TEST": {
            console.log('testRedux', state);
            return {...state};
        }
    }
}

const store = createStore(reducer);

export default store;

