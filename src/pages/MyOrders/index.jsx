import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from '../../Components/Layout/index.jsx'
import { Title3 } from '../../Components/Text/Titles.jsx'
import { CartOrder } from '../../Components/cartOrder/index.jsx'


function MyOrders() {
    const { isCartOpen } = useContext(ShoppingCartContext)
    const [ showProducts, setShowProducts] = useState(false)
    const { orders, setOrders } = useContext(ShoppingCartContext)
    let pendingOrders = orders.filter(value => value.state === "pending")

    return (
      <>
      <Layout>
        <section className='flex justify-center pt-40 bg-silver2 w-full min-h-[100vh] pb-8'>
            <div className="w-10/12">
                <Title3 color='text-golden' extraCss='text-center'>My Orders</Title3>
                <div>
                    <h3 className='text-xl text-white font-title mb-6'>Pending</h3>
                    {
                        pendingOrders.map((value) => {
                            const date = new Date(value.date)
                            const day = date.getDay()
                            const month = date.getMonth()
                            const year = date.getFullYear()

                            return (
                                <button className="w-full"
                                    onClick={() => {
                                        let toggleValue = !showProducts
                                        setShowProducts(toggleValue)
                                    }}
                                >
                                    <div key={value.date} className={`w-full flex justify-between items-center bg-silver p-4 mt-4 text-gray-100 ${showProducts ? 'rounded-t-lg' : 'rounded-lg'}`}>
                                        <div className="flex flex-wrap gap-4">
                                            <a className="material-icons text-center rounded-md hover:bg-gray-400 hover:cursor-pointer active:bg-golden">keyboard_arrow_down</a>
                                            <p>{ `${month}/${day}/${year}`}</p>
                                        </div>
                                        <p>Total: ${value.totalPrice.toFixed(2)}</p>
                                        <button className="font-body px-2 py-1 rounded-md hover:bg-gray-600">
                                            Cancel
                                        </button>
                                    </div>
                                    {
                                        showProducts ? 
                                            <div className="bg-gray-300 p-4 pb-2 rounded-b-lg">
                                                {
                                                    value.products.map((product, index) => {
                                                        let lastProduct = value.products.length - 1
                                                        return (
                                                            <div className={`grid grid-cols-3 pb-2 mb-2 border border-x-transparent border-t-transparent ${index === lastProduct ? 'border-b-transparent' : 'border-b-silver'}`}>
                                                                <p className="text-left">{product.title}</p>
                                                                <p>${(product.price * product.amount).toFixed(2)}</p>
                                                                <p className="text-end">{product.amount}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div> : ''
                                    }
                                </button>
                            )
                        })
                    }

                    <h3 className='text-xl text-white font-title mt-8'>Past</h3>
                </div>
            </div>
        </section>
        {
          isCartOpen ? <CartOrder /> : null
        }
      </Layout>
      </>
    )
  }
  
  export default MyOrders