import { NavLink } from "react-router-dom"
import mainLogo from '@public/LogoMasterChef.svg'
import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "@context"
import SearchGallery from "@components/Sections/SearchGallery"
import products from '@data/products.json'

const Navbar = ({isPoster}) => {
    const { count, isCartOpen, openCart, closeCart } = useContext(ShoppingCartContext)
    const [isSeachOpen, setIsSearchOpen] = useState(false)
    const toggleSearchOpen = () => setIsSearchOpen(!isSeachOpen)

    //Search products
    // const [ filteredProducts, setFilteredProducts ] = useState(Object.values(products))
    // const filterByText = (text) => {
    //     let newListOfProducts = Object.values(products).filter(value => value.name.toLowerCase().includes(text.toLowerCase()) || value.category.indexOf(text.toLowerCase()))
    //     setFilteredProducts(newListOfProducts)
    // }

    const [mobile, setMobile] = useState(false)
    const activeStyle = 'underline underline-offset-4'
    // if(windowW < 641) setMobile(true)

    useEffect(() => {
        let windowWidth = window.innerWidth
        const handleResize = () => windowWidth = window.innerWidth
        window.addEventListener('resize', handleResize)

        if(windowWidth < 641) {
            setMobile(true)
        } else {
            setMobile(false)
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const showMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

    return (
        <nav className={`flex justify-center items-center absolute top-0 z-10 w-full ${isPoster ? 'mt-[30%] md:mt-[20%] lg:mt-6' : 'mt-6'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-10/12 xl:w-8/12">
                <div className={`logo lg:w-[200px] xl:w-[240px]`}>
                    <NavLink
                        to='/'
                    >
                        <img src={ mainLogo } alt="master chef logo" />
                    </NavLink>
                </div>
                <ul className="flex justify-end items-center gap-8 w-full text-white font-body">
                    {
                        mobile ?
                            <button className="fixed bottom-[6rem] sm:bottom-[unset] sm:top-10 lg:top-[unset] right-10 xl:right-20 bg-white sm:bg-transparent text-silver sm:text-white hover:text-silver h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-2l z-30"
                                onClick={() => showMobileMenu()}
                            >
                                {
                                    mobileMenuOpen ?
                                    <a className="material-icons">close</a> :
                                    <a className="material-icons">menu</a>
                                }
                            </button> : ''

                    }
                    {
                        mobile ? '' :
                            <li>
                                <NavLink
                                    to='/my-orders'
                                    className={({ isActive }) => isActive ? activeStyle : undefined }
                                >
                                    My Orders
                                </NavLink>
                            </li>
                    }
                    {
                        mobile ? '' :
                            <li>
                                <NavLink
                                    to='/about-us'
                                    className={({ isActive }) => isActive ? activeStyle : undefined }
                                >
                                    About Us
                                </NavLink>
                            </li>
                    }
                    {
                        mobile ? '' :
                            <li>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) => isActive ? activeStyle : undefined }
                                >
                                    Contact
                                </NavLink>
                            </li>
                    }
                    {/* <li>
                        <div className="flex justify-center items-center gap-2 fixed bottom-[5.5rem] right-10 md:bottom-[unset] md:right-20 md:top-10 lg:static">
                            {
                                isSeachOpen ?
                                    <button className="p-1 flex justify-center items-center rounded-full hover:bg-gray-700"
                                        onClick={() => toggleSearchOpen()}
                                    >
                                        <a className="material-icons">close</a>
                                    </button> :
                                    ""

                            }
                            <input
                                type="text"
                                className={`rounded-md w-[0] transition ${isSeachOpen ? 'w-[unset] py-1 px-2 border bg-black text-gray-200' : ''}`}
                                onChange={(e => {
                                    console.log(filteredProducts)
                                    filterByText(e.target.value)
                                })}
                            />
                            <button className="bg-white sm:bg-transparent hover:bg-golden text-silver sm:text-white hover:text-silver  h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-2l cursor-pointer"
                                onClick={() => toggleSearchOpen()}
                            >
                                <a className="material-icons">search</a>
                            </button>
                        </div>
                    </li> */}
                </ul>
            </div>
            <button className="fixed bottom-10 sm:bottom-[unset] sm:top-10 lg:top-[unset] right-10 xl:right-20 bg-golden sm:bg-transparent hover:bg-golden text-silver sm:text-white hover:text-silver h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-2l z-30"
                onClick={() => {
                    if(isCartOpen) {
                        closeCart()
                    } else {
                        openCart()
                    }
                }}
            >
                <a className="material-icons">shopping_cart</a>
                <div
                    className={`absolute bg-red-600 font-medium text-white flex justify-center items-center text-xs h-6 w-6 max-w-6 max-h-6 rounded-full right-[-25%] top-[-25%] ${ count > 0 ? 'flex' : 'hidden'}`}
                >{ count }</div>
            </button>
            {/* {
                isSeachOpen ? <SearchGallery products={ filteredProducts }></SearchGallery> : ""
            } */}
            { mobile ?
                <div className={`${mobileMenuOpen ? 'fixed' : 'hidden'} top-0 left-0 w-[100vw] h-[100vh] bg-silver bg-opacity-95 z-10 text-white text-2xl px-10 py-20 flex flex-col justify-end gap-8`}>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        My Orders
                    </NavLink>
                    <NavLink
                        to='/about-us'
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Contact
                    </NavLink>
                </div>
                : ''
            }
        </nav>
    )
}

export default Navbar