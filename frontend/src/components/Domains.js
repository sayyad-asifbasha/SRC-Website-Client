import React from "react";
import app from "../assets/images/ui-ux.avif";
export default function Domains() {
    const move = (e) => {
        const container = document.getElementById("scroll");
        container.scrollLeft += e.deltaY;
    };
    return (
        <>
            <div className="domain-container">
                <div id="scroll" onWheel={move}>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>App DEV</h3>
                        </div>
                    </div>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>Web DEV</h3>
                        </div>
                    </div>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>UI/UX</h3>
                        </div>
                    </div>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>DSA</h3>
                        </div>
                    </div>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>Cyber security</h3>
                        </div>
                    </div>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>Competitive</h3>
                        </div>
                    </div>
                    <div className="domain-element">
                        <div className="domain-image">
                            <img src={app} alt="Domain" />
                        </div>
                        <div className="domain-name">
                            <h3>AI ML</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
