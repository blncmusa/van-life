import React from "react";

export default function VanElements({info}){

    const word = info.type
    const label = word.charAt(0).toUpperCase() + word.slice(1)

    return (
        <>
            <div>
                <img src={info.imageUrl} className="van--image" alt="" />
                <section className="van--name">
                    <h1>{info.name}</h1>
                    <p><strong>${info.price} </strong><br />/day</p>
                </section>
                <button className={`${info.type}--label`}>{label}</button>
            </div>
        </>
    )
}