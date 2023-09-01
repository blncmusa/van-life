import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <div className="right">
                <Link to="/"><h1>#VANLIFE</h1></Link>
            </div>
            <div className="left">
                <ul>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/vans"><li>Vans</li></Link>
                </ul>
            </div>
        </nav>
    )
}