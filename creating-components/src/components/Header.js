import React from "react";

function Header(props) {
        console.log(props)
    return <h1>Hello there indeed, {props.name}</h1>;
}

export default Header;