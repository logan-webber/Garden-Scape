import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>This is the Home page</h1>
            <h2>Click below to view and add plants</h2>
            <Link to='/listofplants'>List of plants</Link>
            <br />
            <Link to='/AddPlant'>Add a plant</Link>
        </>
    )
}

export default Home