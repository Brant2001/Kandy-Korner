import React from "react"
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";



export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Tooth rotting candy sold here!!!</small>

        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)