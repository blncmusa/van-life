import React from "react";
import Navbar from "../components/Navbar";
import VanElements from "../components/vanElements";

export default function Vans(){

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch('/api/vans')
        .then(res => {
            if (!res.ok){
                throw new Error('Network response was not ok')
            }
            return res.json()
        })
        .then(data => setVans(data.vans))
        .catch(error => console.error('Error: ', error))
    }, [])

    const vanElements = vans.map( van => {
        return <VanElements info={van} key={van.id}/>
    })

    return (
        <>
            <Navbar/>
                <h1>Explore our van options</h1>
                <section className="vans--grid">
                    {vanElements}
                </section>
        </>
    )
}