const GalleryTwo = ({ elements, bgImage, bgColor, children }) => {
    return (
        <div className={`flex justify-center items-center w-full py-20 ${ bgColor }`}
            style={{backgroundImage: `url(${ bgImage })`}}
        >
            <div className="w-10/12 xl:w-8/12">
                { children }
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        elements
                    }
                </div>
            </div>
        </div>
    )
}

const GalleryThree = ({ elements, bgImage, bgColor, children }) => {
    return (
        <div className={`flex justify-center items-center w-full py-20 ${ bgColor }`}
            style={{backgroundImage: `url(${ bgImage })`}}
        >
            <div className="w-10/12 xl:w-8/12">
                { children }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {
                        elements
                    }
                </div>
            </div>
        </div>
    )
}

export { GalleryThree, GalleryTwo }