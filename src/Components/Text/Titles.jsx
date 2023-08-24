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
            className={`font-title text-3xl w-80 mb-4 uppercase leading-10 ${ color } ${ extraCss }`}
        >{ children }</h3>
    )
}

export { Title3, Title4 }