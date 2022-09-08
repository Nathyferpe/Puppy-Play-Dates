import { useAuth0 } from "@auth0/auth0-react";
import "./cssAuth0button.css";

const LogoutButton = () => {
  const { loginWithRedirect: logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="btn"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
