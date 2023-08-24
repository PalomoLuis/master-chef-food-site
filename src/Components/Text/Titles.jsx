const Title3 = ({ color, extraCss, children }) => {
    return (
        <h3
            className={`font-title text-xl md:text-2xl mb-6 uppercase ${ color } ${ extraCss }`}
        >{ children }</h3>
    )
}

const Title4 = ({ color, extraCss, children }) => {
    return (
        <h3
            className={`font-title text-xl md:text-2xl lg:text-3xl w-80 mb-2 md:mb-4 uppercase leading-6 xl:leading-10 ${ color } ${ extraCss }`}
        >{ children }</h3>
    )
}

export { Title3, Title4 }