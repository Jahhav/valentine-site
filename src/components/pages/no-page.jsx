import React from "react";
import './no-page.css'
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="paren-parent">
            <div className="parent-div">
                <div className="row-one row">
                    <img src="/videos/skel5.gif" alt="Image 1" className="image" />
                    <img src="/videos/skel2.gif" alt="Image 2" className="image" />
                </div>
                <h1>That was not an option ☠️</h1>
                <div className="row-two row">
                    <img src="/videos/skel4.gif" alt="Image 3" className="image" />
                    <img src="/videos/skel3.gif" alt="Image 4" className="image" />
                </div>
                <Link to={'/valentine'}>
                    <button class="button-62" role="button">Once again 😠</button>
                </Link>
            </div>
        </div>
    )
}

export default NoPage;