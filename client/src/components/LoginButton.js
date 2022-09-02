import { useAuth0 } from "@auth0/auth0-react";
import "./cssAuth0button.css";

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated } = useAuth0()

        return (
            !isAuthenticated && (
                <button className="btn" onClick={() => loginWithRedirect()}>
                    Sign In
                </button>
            )
        )
    }

    export default LoginButton;
