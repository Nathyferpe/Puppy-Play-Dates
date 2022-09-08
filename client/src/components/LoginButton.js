import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import "./cssAuth0button.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btn" onClick={() => loginWithRedirect()}>
        Sign In
      </button>
    )
  );
};

// https://auth0.com/blog/complete-guide-to-react-user-authentication/

export default LoginButton;
