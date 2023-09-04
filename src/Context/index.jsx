import { useState, createContext } from 'react'
import products from '../data/products.json'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)
    const [productsToShow, setProductsToShow] = useState([])

    //Shopping Cart - Order
    const [orders, setOrders] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isCartOpen,
            openCart,
            closeCart,
            productsToShow,
            setProductsToShow,
            orders,
            setOrders
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

