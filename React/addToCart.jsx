// Write a function in js (using react) that tackes in a product and a quantity as arguments and adds the products to the cart. The cart should be an array of objects, where each object represents a product and its corresponding quantity. The function should then console.log the updated cart. Use below data for doing this task.

import React, { useState } from "react";

const mockProducts = [
    {
        id: 1,
        name: "Product 1",
        description: "Product description 1",
        price: 9.99
    },
    {
        id: 2,
        name: "Product 2",
        description: "Product description 2",
        price: 90.99
    },
    {
        id: 3,
        name: "Product 3",
        description: "Product description 3",
        price: 19.99
    }
];

const addToCart = (product, quantity, cart, setCart) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
        setCart([...cart]);
    } else {
        const cartItem = {
            product,
            quantity
        };
        setCart([...cart, cartItem]);
    }
};

const ProductComponent = () => {
    const [cart, setCart] = useState([]);

    // Function to add product to cart
    const handleAddToCart = (product, quantity) => {
        addToCart(product, quantity, cart, setCart);
    };

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {mockProducts.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => handleAddToCart(product, 1)}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
            <h1>Cart</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <h3>{item.product.name}</h3>
                        <p>Quantity: {item.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductComponent;
