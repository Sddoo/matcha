import React from "react";
import {Link} from "react-router-dom";

const AuthPage = () => {
    return (
        <div>
            <form action="POST">
                Email: <input type="email"/> <br/>
                Password: <input type="password"/> <br/>
                <button>Зайти</button>
            </form>
            <Link to="/registration">RegistrationPage</Link>
        </div>
    );
}

export default AuthPage;