import React from "react"
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypeProvider } from "./products/TypeProvider";
import ProductList from "./products/ProductList";
import EmployeeList from "./employees/EmployeeList";
import { EmployeeProvider } from "./employees/EmployeeProvider";



export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Tooth rotting candy sold here!!!</small>

        <EmployeeProvider>
            <LocationProvider>
                <ProductProvider>
                    <ProductTypeProvider>
                            <LocationList />
                            <ProductList />
                            <EmployeeList />
                    </ProductTypeProvider>
                </ProductProvider>
            </LocationProvider>
        </EmployeeProvider>
    </>
)