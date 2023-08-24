
const Hero = ({ bgImage }) => {
    return (
        <div className="conatiner flex justify-center items-end lg:items-center w-full bg-gray-300 h-[70vh] py-10 bg-cover bg-center lg:bg-right-bottom xl:bg-center"
            style={{backgroundImage: `url(${ bgImage })`}}
        >
            <div className="w-10/12 xl:w-8/12 flex flex-col items-center lg:items-end text-white">
                <h1 className="font-title text-2xl md:text-3xl w-80 text-center lg:text-end mb-3">SPECIAL FLAVORS</h1>
                <p className="font-body w-80 text-base text-center lg:text-end">As every person is different, each plate has its own personality and charisma.</p>
            </div>
        </div>
    )
}

export default Hero