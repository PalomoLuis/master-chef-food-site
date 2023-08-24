const ButtonSGold = ({ children, link, extraCss }) => {
    return (
        <button className={`bg-golden text-silver font-body px-4 rounded-md max-h-10 min-h-[2.5rem] hover:bg-white ${ extraCss }`}>
            { children }
        </button>
    )
}

export { ButtonSGold }