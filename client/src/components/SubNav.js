import React from "react";
import GlobalStyles from "./GlobalStyles";

const SubNav = () => {

    return (
    <div style= {{display: "flex" }}>   
            <div style={{display: "flex", justifyContent: "center"}}>
                    <button style={{width: "200px"}}>My Profile</button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{width: "200px"}}>Events</button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{width: "200px"}}>Add Friends</button>
            </div>
    </div>

    );
};

export default SubNav;




