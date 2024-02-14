import React from "react";
import { Link } from "react-router-dom";

import './navigation-bar.css'

const NavigationBar = () => {

    return (
        <div className="navigation-bar">
            <div className="navigation-logo">
                <Link className="JAN" to={"/"}>
                    <h1>Jan</h1>
                    <i class="fa-solid fa-skull"></i>
                </Link>

            </div>
            <div className="navigation-links">
                <Link className="item item-0" to={"/valentine"}>VALENTINE</Link>
                <Link className="item item-1" to={"/"}>HOME</Link>
                <Link className="item item-2" to={"/about-me"}>ABOUT ME</Link>
                <Link className="item item-3" to={"/contact"}>CONTACT</Link>
            </div>
        </div>
    )

}

export default NavigationBar;