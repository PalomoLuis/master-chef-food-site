import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"

export const CartOrder = () => {
    const { closeCart, productsToShow, cartList } = useContext(ShoppingCartContext)

    return (
        <aside className="z-20 fixed top-0 right-0 w-full md:w-[500px] h-[100vh] bg-silver2 shadow-md text-white flex flex-wrap justify-center items-end p-8 rounded-l-3xl">
            <button className="absolute top-8 left-10"
                onClick={() => closeCart()}
            >X</button>
            <div className="w-full h-[80%] border border-teal-50">
                    {
                        cartList.map(value => (
                            <div className="w-full flex justify-between" key={ value.key}>
                                <p>{ value.title }</p>
                                <p>{ value.amount }</p>
                                <p>{ (value.price * value.amount).toFixed(2) }</p>
                            </div>
                        ))
                    }
            </div>
            <div className="w-full h-10 border border-teal-50">
                Total
            </div>
        </aside>
    )
}