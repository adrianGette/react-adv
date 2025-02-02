import React from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/'

const product = {
    id: '1',
    title: 'Producto 1',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={ "" } />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
            
        </div>
    )
}

export default ShoppingPage