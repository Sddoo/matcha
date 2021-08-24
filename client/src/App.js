import React from 'react';
import AuthPage from "./pages/AuthPage";
import RegistrationPage from "./pages/RegistrationPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    dispatch({type: "TEST", payload: 'kek'});

    return (
    <BrowserRouter>
        <Switch>
            <Route path="/auth" component={AuthPage}/>
            <Route path="/registration" component={RegistrationPage}/>
            <Redirect to="/auth"/>
        </Switch>
    </BrowserRouter>
    );
}

export default App;
