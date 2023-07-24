import React from "react";

const Nav = () => {
    return (
        <nav className="contact-links">
            <ul className="flex justify-center">
                <li className="mr-5">
                    <a href="#about-me" className="hover:text-gray-300">
                        About Me
                    </a>
                </li>
                <li className="mr-5">
                    <a href="#projects" className="hover:text-gray-300">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-300">
                        Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;