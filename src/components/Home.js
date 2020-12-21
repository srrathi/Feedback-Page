import React from 'react'
import Nav from './Nav'

function Home() {
    return (
        <div>
            <Nav text = {"Home Page"}></Nav>
            <div className = "home-text">
                <h1>Welcome to our Feedback page</h1>
                <h4>Please land to your desired location from our Navigation Panel</h4>
            </div>
        </div>
    )
}

export default Home
