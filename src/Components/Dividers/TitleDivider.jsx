const TitleDivider = ({ title }) => {
    return (
        <div className="w-full flex justify-center items-center bg-zafiro h-[130px]">
            <h2 className="text-golden font-title text-xl md:text-3xl uppercase">{ title }</h2>
        </div>
    )
}

export default TitleDivider