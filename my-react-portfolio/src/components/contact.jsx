import { useState } from "react";

const ContactMe = () =>{
    return (
        <div className="contact-links">
        <h2>contact</h2>
        <ul>
            <li>
                <a href="https://github.com/vlexaega/" alt="github" target="_blank">Github</a>
            </li>
            <li>
                <a href="mailto:alex.vega7@outlook.com">Email</a>
            </li>
            <li>
                <a href="https://twitter.com/_alxvga" target="_blank">Twitter</a>
            </li>
        </ul>
    </div>
    );
};

export default ContactMe;