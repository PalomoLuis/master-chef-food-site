const Footer = ({ logo, title1, title2, title3, title4, list1, list2, list3, list4 }) => {
    const titleCss = 'uppercase mb-4'
    const listItemCss = 'text-sm text-gray-400 break-words'

    return (
        <div className="w-full bg-zafiro text-white flex justify-center items-center pt-6 pb-12">
            <div className="w-8/12 flex justify-between gap-6">
                <div className="w-[15%] flex flex-col mt-8">
                    <p className={ titleCss }>{ title1 }</p>
                    { list1.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
                <div className="w-[15%] flex flex-col mt-8">
                    <p className={ titleCss }>{ title2 }</p>
                    { list2.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
                <div className="w-[40%] flex justify-center">
                    <img src={ logo } alt="logo" />
                </div>
                <div className="w-[15%] flex flex-col mt-8">
                    <p className={ titleCss }>{ title3 }</p>
                    { list3.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
                <div className="w-[15%] flex flex-col mt-8">
                    <p className={ titleCss }>{ title4 }</p>
                    { list4.map( item => ( <a className={ listItemCss }>{ item }</a> )) }
                </div>
            </div>
        </div>
    )
}

export default Footer