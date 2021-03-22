import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
    return(
        <>
            <h1>This is the Home page</h1>
            <h2>It will be the main page of the website and provide links to navigate around</h2>
            <Link to='/listofplants'>List of plants</Link>
            <Link to='/AddPlant'>Add a plant</Link>
        </>
    )
}

export default Home