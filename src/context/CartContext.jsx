import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    // Add to cart
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
            }

            return [...prev, { ...product, qty: 1 }]

        })
    }
    // remove from cart
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))//This code removes an item from cart by creating a new array that excludes the matching id. 
    }
    // update qty
    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) => (item.id === id ? { ...item, qty } : item))
        )
    }
    // final amount
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    localStorage.setItem("cart", JSON.stringify(cart))
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateQty, total }}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook
export const useCart = () => useContext(CartContext)