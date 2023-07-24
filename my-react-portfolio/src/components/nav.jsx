import React from "react";

const Nav = () => {
    return (
        <nav className="text-white bg-gray-900 body-font">
            <ul className="flex justify-center">
                <li className="mr-5">
                    <a href="#about-me" className="hover:text-gray-300">
                        About Me
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;