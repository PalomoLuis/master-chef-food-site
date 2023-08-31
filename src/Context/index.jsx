import { useState, createContext } from 'react'
import products from '../data/products.json'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)
    const [productsToShow, setProductsToShow] = useState([])
    // const [cartList, setCartList] = useState([])
    // const updateCartList = (data) => {
    //     let { id, title, price } = data
    //     setProductsToShow([...productsToShow, { id: id, title: title, price: price}])
    //     let list = productsToShow
    //     // let list = data
    //     let amountList = {}
    //     list.map( value => amountList[value.id] = { id: value.id, amount: 0, title: value.title, price: value.price})
    //     list.map( value => amountList[value.id].amount += 1)
    //     setCartList(Object.values(amountList))
    // } 
    // const [ cartShowList, setCartShowList ] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isCartOpen,
            openCart,
            closeCart,
            productsToShow,
            setProductsToShow,
            // cartList
            // updateCartList
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

