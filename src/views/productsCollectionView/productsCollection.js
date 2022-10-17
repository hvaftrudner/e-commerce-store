import React, { Component } from 'react';

import "./productsCollection.css"
import ProductView from "../productView/productView"

const fakeNumProd = 5

const products = () => {
    //counting products here
}

const ProductsCollection = () => {
    return (
        <div className="productsCollection">
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
            <ProductView />
        </div>
    )
}

export default ProductsCollection