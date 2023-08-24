import { Title3, Title4 } from "../Text/Titles"
import { ButtonSGold } from "../Buttons"

const TextCard = ({ title, price, cta, description, newTag }) => {
    return (
        <div className="relative bg-silver3 shadow-md px-6 xl:px-8 py-4 xl:py-6 rounded-xl drop-shadow-8l flex justify-between gap-6 md:gap-2">
            <div className="w-[80%]"> 
                <Title4 color='text-white' extraCss='text-base lg:text-lg mb-0 w-full'>{ title }</Title4>
                <p className="font-body text-xs lg:text-sm text-gray-300">{ description }</p>
            </div>
            <div className="flex flex-col items-center justify-between gap-2">
                <p className="text-golden font-body mb-1/2">$ { price }</p>
                <ButtonSGold>{ cta }</ButtonSGold>
            </div>
        </div>
    )
}

const ImageCard = ({ image, title, price, cta }) => {
    return (
        <div className="bg-silver opacity-80 shadow-md p-4 md:p-6 xl:p-8 rounded-xl drop-shadow-8l">
            <div className="relative flex md:flex-col items-center justify-between h-full min-h-[60px]">
                <img src={ image } alt={ title } className="absolute md:static left-[-20px] top-[50%] translate-y-[-50%] md:translate-y-0 w-[110px] md:w-4/5 xl:w-2/3 mb-10 drop-shadow-2xl"/>
                <button className="absolute bottom-0 md:bottom-[unset] md:top-0 right-0 text-white">i</button>
                <div className="ml-[35%] md:ml-0 w-[65%] place-self-start md:place-self-center md:w-full flex justify-between">
                    <div>
                        <p className="text-golden font-body text-sm xl:text-base mb-1 xl:mb-1/2">$ { price }</p>
                        <p className="text-white font-title text-sm xl:text-base">{ title }</p>
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
            <div className="w-10/12 xl:w-8/12">
                <Title3 color="text-golden" extraCss='text-center'>{ preTitle }</Title3>
                <div className="copy py-10 xl:py-40 w-full flex flex-col md:items-end">
                    <Title4 color="text-white" extraCss="w-full lg:w-60 md:text-end">{ title }</Title4>
                    <p className="text-white text-sm md:text-base w-1/2 lg:w-80 md:text-end">{ description }</p>
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
        <div className="flex justify-center w-full py-40 xl:py-60 bg-black bg-cover bg-right"
            style={{ backgroundImage:`linear-gradient(90deg, #262C2F 20%, #262C2F00 80%), url('${image}')` }}
        >
            <div className="w-10/12 xl:w-8/12 text-white">
                <p className="text-[160px] font-title leading-[80px]">{ title1 }</p>
                <p className="text-[60px] font-title ml-4">{ title2 }</p>
                <p className="text-sm font-body ml-8 w-[260px] text-gray-300">{ description }</p>
            </div>
        </div>
    )
}

export { TextCard, ImageCard, PromotionFullCard, FiftyYearsSpecialCard }