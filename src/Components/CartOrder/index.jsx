import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import './cartOrder.css'

export const CartOrder = () => {
    const { count, setCount, closeCart, productsToShow, setProductsToShow } = useContext(ShoppingCartContext)

    let total = 0
    productsToShow.map(value => total += value.price * value.amount)

    const removeOne = (id) => {
        debugger
        console.log(productsToShow)
        let products = [...productsToShow]
        let productInCardIndex = products.findIndex(value => value.id === id)
        if(products[productInCardIndex].amount > 1) {
            products[productInCardIndex].amount -= 1
            setProductsToShow(products)
        } else {
            products.splice(productInCardIndex, 1)
            setProductsToShow(products)
        }
    } 

    return (
        <aside className="z-20 fixed top-0 right-0 w-full md:w-[500px] h-[100vh] bg-silver2 bg-opacity-95 shadow-2xl text-white flex flex-wrap justify-center items-end px-8 pb-8 rounded-l-3xl">
            <button className="absolute top-8 left-8"
                onClick={() => closeCart()}
            >X</button>
            <div className="cartProduct-cont w-full h-[80%] overflow-hidden hover:overflow-y-scroll">
                {
                    productsToShow.map(value => (
                        <div className="cartProduct w-full grid items-center mb-2 p-3 shadow-lg bg-silver3 rounded-md" key={ value.id}>
                            <p>{ value.title }</p>
                            <p>{ value.amount }</p>
                            <p className="text-golden">${ (value.price * value.amount).toFixed(2) }</p>
                            <a className="material-icons w-[30px] h-[30px] text-center justify-self-end p-1 text-lg hover:bg-golden hover:text-silver hover:cursor-pointer rounded-full"
                            onClick={ () => {
                                setCount(count - 1)
                                removeOne(value.id)
                            } }
                            >close</a>
                        </div>
                    ))
                }
            </div>
            <div className="w-full h-10 border border-t-white border-x-0 border-b-0 pt-2">
                <div className="flex justify-between">
                    <p>Total</p>
                    <p className="text-golden text-right">${ (total).toFixed(2) }</p>
                </div>
            </div>
        </aside>
    )
}