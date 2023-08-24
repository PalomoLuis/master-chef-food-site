const TitleDivider = ({ title }) => {
    return (
        <div className="w-full flex justify-center items-center bg-zafiro h-[70px] md:h-[100px] lg:h-[130px]">
            <h2 className="text-golden font-title text-lg md:text-xl lg:text-3xl uppercase">{ title }</h2>
        </div>
    )
}

export default TitleDivider