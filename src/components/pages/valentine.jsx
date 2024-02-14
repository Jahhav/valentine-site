import React from "react";
import './valentine.css'
import { Link } from "react-router-dom";

const Valentine = () => {
    return (
        <div className="body-con">
            <div className="valentine-container">
                <h1 className="h1-lucinka">Ahoj Lucinko</h1>
                <h1 className="h1-question">Will You be my Valentine?</h1>
                <h1 className="h1-emojis">🤍☹️🩷</h1>
            </div>

            <div className="cards-container">
                <div className="answer-box answer-no">
                    <Link to={'/no-page'}>
                        <button class="button-49" role="button">NO</button>
                    </Link>
                </div>
                <div className="answer-box answer-yes">
                    <Link to={'/yes-page'}>
                        <button class="button-82-pushable" role="button">
                            <span class="button-82-shadow"></span>
                            <span class="button-82-edge"></span>
                            <span class="button-82-front text">
                                YES! 🥰
                            </span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Valentine;