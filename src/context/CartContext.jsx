import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCard] = useState([])
    // Add to cart
    const addToCart = (product) => {
        setCard((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
            }

            return [...prev, { ...product, qty: 1 }]

        })
    }
    return (
        <CartContext.Provider value={{ cart, setCard ,addToCart}}>
            {children}
        </CartContext.Provider> 
    )
}

// custom hook
export const useCart = () => useContext(CartContext)