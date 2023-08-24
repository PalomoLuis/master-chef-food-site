const Layout = ({ children }) => {
    return (
        <div className="flex flex-col absolute top-0 w-full items-center bg-cover bg-center">
            { children }
        </div>
    )
}

export default Layout