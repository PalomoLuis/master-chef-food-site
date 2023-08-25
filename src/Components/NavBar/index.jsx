import { NavLink } from "react-router-dom"
import mainLogo from '../../../public/LogoMasterChef.svg'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'
    let mobile = false 

    return (
        <nav className="flex justify-center items-center absolute top-0 z-10 w-full  mt-[30%] md:mt-[20%] lg:mt-6">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-10/12 xl:w-8/12">
                <div className="logo lg:w-[200px] xl:w-[240px]">
                    <NavLink
                        to='/'
                    >
                        <img src={ mainLogo } alt="master chef logo" />
                    </NavLink>
                </div>
                <ul className="flex justify-end gap-8 w-full text-white font-body">
                    {
                        mobile ? 
                            <div className="hamb-mobile-logo">
                                hamb-mobile-logo
                            </div> : ''

                    }
                    <li>
                        <NavLink
                            to='/about-us'
                            className={({ isActive }) => isActive ? activeStyle : undefined }
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) => isActive ? activeStyle : undefined }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <button className="fixed top-10 lg:top-[unset]  md:right-10 xl:right-20 bg-transparent hover:bg-golden text-white hover:text-silver h-[40px] w-[40px] flex justify-center items-center rounded-full">
                <a className="material-icons">shopping_cart</a>
            </button>
        </nav>
    )
}

export default Navbar