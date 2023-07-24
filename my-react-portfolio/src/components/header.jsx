import React from "react";

const Header = () => {
    const headerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
    };
    const imageStyle = {
        maxWidth: "100%",
        height: "auto",
    };
    return (
        <header style={headerStyle}>
            <img src="/assets/bahamas.4.jpg" alt="Bahamas " style={imageStyle}/>
        </header>
    );
};

export default Header;