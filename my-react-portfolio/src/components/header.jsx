import React from "react";

const Header = () => {
    const headerStyle = {
        backgroundColor: "rgb(218, 234, 241)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
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