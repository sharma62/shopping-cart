import { createContext, useContext, useState } from "react";

const CartContext = createContext(null)

export const CartProvider = ({ chidren }) => {
    const [cart, setCard] = useState([])
    // Add to cart
    const addToCart = (product) => {
        setCard((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) => item.id === product.id ? { product, qty: item.qty + 1 } : item)
            }

            return [...prev, { product, qty: 1 }]

        })
    }
    return (
        <CartContext.Provider value={{ cart, setCard ,addToCart}}>
            {chidren}
        </CartContext.Provider> 
    )
}

// custom hook
export const useCart = () => useContext(CartContext)