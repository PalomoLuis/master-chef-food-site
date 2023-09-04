import { GalleryTwo } from "./Gallery"
import { TextCard } from "../Cards"

const SearchGallery = ({ products }) => {
    
    return (
        <div className="fixed top-[8rem] h-[86vh] w-full bg-silver bg-opacity-90 overflow-y-scroll">
            <GalleryTwo
                elements={
                    products.map(value => {
                    return(
                        <TextCard
                            title={ value.name }
                            price={ value.price }
                            key={ value.id }
                            cta={ 'add' }
                        ></TextCard>
                    )})
                }
            >
            </GalleryTwo>
        </div>
    )
}

export default SearchGallery