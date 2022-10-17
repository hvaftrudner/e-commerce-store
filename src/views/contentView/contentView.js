import React, { Component } from 'react';

import "./contentView.css"
import Categories from "../categories/categories"
import ProductsCollection from "../productsCollectionView/productsCollection"

const ContentView = () => {
    return (
        <div className="contentView">
            <Categories />
            <ProductsCollection />
        </div>
    )
}

export default ContentView