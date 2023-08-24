const Footer = ({ logo, title1, title2, title3, title4, list1, list2, list3, list4 }) => {
    const titleCss = 'text-xs lg:text-base uppercase mb-4'
    const listItemCss = 'text-xs lg:text-sm text-gray-400 break-words'

    return (
        <div className="w-full bg-zafiro text-white flex justify-center items-center pt-6 pb-12">
            <div className="w-10/12 xl:w-8/12 flex flex-col md:flex-row justify-between gap-4 xl:gap-6">
                <div className="md:w-[15%] flex flex-col md:mt-8">
                    <p className={ titleCss }>{ title1 }</p>
                    { list1.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
                <div className="md:w-[15%] flex flex-col md:mt-8">
                    <p className={ titleCss }>{ title2 }</p>
                    { list2.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
                <div className="w-[40%] hidden md:flex justify-center">
                    <img src={ logo } alt="logo" className="w-2/3 xl:w-1/2" />
                </div>
                <div className="md:w-[15%] flex flex-col md:mt-8">
                    <p className={ titleCss }>{ title3 }</p>
                    { list3.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
                <div className="md:w-[15%] flex flex-col md:mt-8">
                    <p className={ titleCss }>{ title4 }</p>
                    { list4.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
            </div>
        </div>
    )
}

export default Footer