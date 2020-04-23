import React from "react"

export default ({location}) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__size">{location.squareFt} Square Feet</div>
        <div className="location__accessible">Handicap Accessible: {location.handicapA? "yes": "no"}</div>
    </section>
)