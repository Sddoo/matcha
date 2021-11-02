import React from 'react';
import {useSelector} from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { styled } from "@mui/system";
import { Container } from "@mui/material";
import {createGlobalStyle} from "styled-components";
import AuthPage from "./pages/AuthPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SettingsPage from "./pages/SettingsPage";
import BrowsingPage from "./pages/BrowsingPage";
import ChatPage from "./pages/ChatPage";
import NotificationPage from "./pages/NotificationPage";

const Global = createGlobalStyle`
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
	
`

const MainContent = styled(Container)`
	width: 1200px;
	height: auto;
	margin: 0 auto 0;
`;

const Page = styled("div")`
	display: grid;
	grid-template-areas:
		"header"
		"main-content"
		"footer"
	;
	grid-template-rows: 75px 1fr 200px;
`

function App() {
	const isAuth = useSelector(state => state.token);
	
    return (
    <BrowserRouter>
	    <Global />
	    <Page>
		    { isAuth ? <Header/> : <div></div> }
		    <MainContent>
		        <Switch>
		            <Route path="/auth" component={AuthPage}/>
		            <Route path="/registration" component={RegistrationPage}/>
		            <Route path="/settings" component={SettingsPage}/>
		            <Route path="/browsing" component={BrowsingPage}/>
		            <Route path="/chat" component={ChatPage}/>
		            <Route path="/notifications" component={NotificationPage}/>
		            <Route path="/profile/:id" component={ProfilePage}/>
		            <Redirect to="/auth"/>
		        </Switch>
		    </MainContent>
		    <Footer/>
	    </Page>
    </BrowserRouter>
    );
}

export default App;
