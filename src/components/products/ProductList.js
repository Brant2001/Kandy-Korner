import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypeContext } from "./TypeProvider"



export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)


    return (
        <>
            <h2>Products</h2>

            <ul className="products">
                {
                    products.map(product => {
                        const typ = productTypes.find(pro => pro.id === product.productTypeId)|| {}

                        return <Product key={product.id} productType={typ} product={product} />
                    })
                }
            </ul>
        </>
    )
}