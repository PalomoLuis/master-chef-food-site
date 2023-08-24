const Gallery = ({ columns, elements, bgImage, bgColor, children }) => {

    let columnsAmount = () => {
        let style = ''
        for (let i = 0; i < columns; i++) {
            style += '1fr '
        }
        return style
    }

    return (
        <div className={`flex justify-center items-center w-full py-20 ${ bgColor }`}
            style={{backgroundImage: `url(${ bgImage })`}}
        >
            <div className="w-8/12">
                { children }
                <div className='grid gap-8'
                    style={{ gridTemplateColumns: columnsAmount()}}
                >
                    {
                        elements
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery