import React from 'react';
import {useSelector} from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { styled } from "@mui/system";
import { Paper, Box } from "@mui/material";
import AuthPage from "./pages/AuthPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SettingsPage from "./pages/SettingsPage";
import BrowsingPage from "./pages/BrowsingPage";
import ChatPage from "./pages/ChatPage";
import NotificationPage from "./pages/NotificationPage";

const MainContent = styled(Box)( ({theme}) => ({
	padding: "0",
	gridArea: "main-content",
	width: "1080px",
	margin: "auto",
	
	[theme.breakpoints.down('lg')]: {
		width: "600px",
	},
	
	[theme.breakpoints.down('sm')]: {
		width: "320px",
	},
}))

const Page = styled(Paper)(({theme}) => ({
	backgroundColor: theme.palette.background.main,
	overflowX: "hidden",
	position: "relative",
	display: "grid",
	gridTemplateAreas:`
		"header"
		"main-content"
	`,
	gridTemplateRows: "75px 1fr",
	gridAutoRows: "200px"
}));

function App() {
	const isAuth = useSelector(state => state.token);
	
    return (
    <BrowserRouter>
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
