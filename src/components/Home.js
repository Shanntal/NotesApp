import React, { useState } from "react";
import { renderNotes } from "../actions";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id='main'>
            <div id='header'>
                <h1>Note Taker</h1>
            </div>
            <div id='link'>
            <a href="/#/listNotes">All Your Notes</a>
            </div>
        </div>
    )
}


export default Home;