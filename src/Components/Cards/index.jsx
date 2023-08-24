import { Title3, Title4 } from "../Text/Titles"
import { ButtonSGold } from "../Buttons"

const TextCard = ({ title, price, cta, description, newTag }) => {
    return (
        <div className="relative bg-silver3 shadow-md px-8 py-6 rounded-xl drop-shadow-8l flex justify-between">
            <div className="w-[80%]">
                <Title4 color='text-white' extraCss='text-lg mb-0'>{ title }</Title4>
                <p className="text-white font-body text-sm text-gray-300">{ description }</p>
            </div>
            <div className="flex flex-col items-center justify-between gap-2">
                <p className="text-golden font-body mb-1/2">$ { price }</p>
                <ButtonSGold>{ cta }</ButtonSGold>
            </div>
        </div>
    )
}

const ImageCard = ({ image, title, price, cta, description }) => {
    return (
        <div className="bg-silver opacity-80 shadow-md p-8 overflow-hidden rounded-xl drop-shadow-8l">
            <div className="relative flex flex-col items-center justify-between h-full">
                <img src={ image } alt={ title } className="w-2/3 mb-10 drop-shadow-2xl"/>
                <button className="absolute top-0 right-0 text-white">i</button>
                <div className="w-full flex justify-between">
                    <div>
                        <p className="text-golden font-body mb-1/2">$ { price }</p>
                        <p className="text-white font-title">{ title }</p>
                    </div>
                    <ButtonSGold>{ cta }</ButtonSGold>
                </div>
            </div>
        </div>
    )
}

const PromotionFullCard = ({ image, preTitle, title, price, cta, description, children }) => {
    return (
        <div className="flex justify-center w-full py-20 bg-black bg-cover"
            style={{ backgroundImage:`linear-gradient(to bottom, #0C151A 10%, #0C151A00 100%), url('${image}')` }}
        >
            <div className="w-8/12">
                <Title3 color="text-golden text-center">{ preTitle }</Title3>
                <div className="copy py-40 w-full flex flex-col items-end">
                    <Title4 color="text-white" extraCss="w-60 text-end">{ title }</Title4>
                    <p className="text-white w-80 text-end">{ description }</p>
                    <div className="mt-6 flex gap-4 items-center">
                        <p className="text-golden font-body text-lg">$ { price }</p>
                        <ButtonSGold>add</ButtonSGold>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FiftyYearsSpecialCard = ({ image, title1, title2, description }) => {
    return (
        <div className="flex justify-center w-full py-60 bg-black bg-cover"
            style={{ backgroundImage:`linear-gradient(90deg, #262C2F 20%, #262C2F00 80%), url('${image}')` }}
        >
            <div className="w-8/12 text-white">
                <p className="text-[160px] font-title leading-[80px]">{ title1 }</p>
                <p className="text-[60px] font-title ml-4">{ title2 }</p>
                <p className="text-sm font-body ml-8 w-[260px] text-gray-300">{ description }</p>
            </div>
        </div>
    )
}

export { TextCard, ImageCard, PromotionFullCard, FiftyYearsSpecialCard }