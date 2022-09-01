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




// const Button = ({ handleClick, disabled, Status }) => (
//     <Wrapper disabled={disabled || Status === "pending"} onClick={handleClick}>
//         Confirm
//     </Wrapper>
// );

// const Wrapper = styled.button`
//     background: ${styled.alabamaCrimson};
//     border-radius: 4px;
//     border-color: transparent;
//     color: #fff;
//     font-family: ${styled.headingFont};
//     cursor: pointer;
//     display: block;
//     font-size: 24px;
//     height: 48px;
//     width: 100%;
//     &:disabled {
//         cursor: not-allowed;
//         opacity: 0.4;
//     }
// `;

export default Button;