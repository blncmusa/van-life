import React from 'react'
import Navbar from '../components/Navbar'

export default function Home(){
    return (
        <>
            <Navbar/>
            <main className="home--main">
                <h1>You got the travel plans, <br /> we got the travel vans.</h1>
                <p>Add adventure to your life by joining the <strong>#vanlife</strong> movement. Rent the perfect van to make your perfect road trip.</p>
                <button>Find your van</button>
            </main>
        </>
        

    )
}