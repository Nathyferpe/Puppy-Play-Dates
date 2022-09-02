import React from "react";
import styled from "styled-components";
import LoginPage from "./LoginPage";
import ProfilePageCreation from "./ProfilePageCreation";

const Button = () => {
    const [user, setUser] = useState({name: "", email: ""})

    const Login = details => {
        console.log(details);
    }

        const Logout = () => {
            console.log("logout");
        }

        return (
            <div>
            {(user.email != "") ? (
                <div>
                <h2> Welcome, <span>{user.name}</span></h2>
                <button>logout</button>
                </div>
                //if the user is not login
            ) : (
                <LoginPage/>
            )}
            </div>

        )
    }






export default Button;