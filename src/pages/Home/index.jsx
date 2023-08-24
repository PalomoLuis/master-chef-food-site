import Layout from '../../Components/Layout/index.jsx'
import Hero from '../../Components/Hero/index.jsx'
import TitleDivider from '../../Components/Dividers/TitleDivider.jsx'
import mainLogo from '../../../public/LogoMasterChef.svg'
import HeroImage from '../../images/vegetables-cheese-black-plate.jpeg'
import Gallery from '../../Components/Sections/Gallery.jsx'
import bgSection1 from '../../images/rock-texture.jpeg'
import { Title3 } from '../../Components/Text/Titles.jsx'
import favourites from '../../data/favoutires.js'
import { TextCard, ImageCard, PromotionFullCard, FiftyYearsSpecialCard } from '../../Components/Cards/index.jsx'
import favofitePlateImage from '../../images/ekaterina-bolovtsova.jpeg'
import products from '../../data/products.json'
import pizzaImage from '../../images/pizzas-1.jpeg'
import Footer from '../../Components/Sections/Footer.jsx'
import fiftyYearsImage from '../../images/fifty-years-chef-cooking.jpeg'

function Home() {
  const pizzas = Object.values(products).filter(value => value.category.find(item => item === 'pizzas'))

  return (
    <>
      <Layout>
        <Hero bgImage={ HeroImage }/>
        <TitleDivider title={ 'take a look of our menu' }/>
        <Gallery
          columns={ 3 } 
          bgImage={ bgSection1 }
          elements={ favourites().map(value => {
            return (
              <ImageCard
                title={ value.name }
                price={ value.price }
                cta='add'
                image={ value.image[0]}
                key={ value.id }
              />
            )
          }) }
        >
          <Title3 color={'text-white'} extraCss={'mb-12 lg:mb-16 text-center'}>customer favourites</Title3>
        </Gallery>
        <PromotionFullCard
          image={ favofitePlateImage }
          preTitle="special of the day"
          title="Ekaterina bolovtsova"
          description="Sauteed portobellos with aromas of rosemary, accompanied with cornbread with apple tints."
          price={ 8.19 }
        ></PromotionFullCard>
        < TitleDivider title={ 'not enough?' }/>
        <Gallery
          columns={ 2 }
          bgColor={ 'bg-silver2' }
          elements={ pizzas.map( value => {
            return (
              <TextCard
                title={ value.name }
                description={ value.description }
                price={ value.price }
                cta='add'
                key={ value.id }
              />
            )
          }) }
        >
          <Title3 color={'text-white'} extraCss={'mb-12 lg:mb-16 text-center'}>Pizzas</Title3>
        </Gallery>
        <img src={ pizzaImage } alt="pizzas" />
        <FiftyYearsSpecialCard
          image={ fiftyYearsImage }
          title1='50'
          title2='years'
          description='The true teacher is born with time. Every year is a mark and an experience. However, all of this only makes us love what we do even more.'
        />
        <TitleDivider title={ 'ready to order?' } />
        <Footer
          logo={ mainLogo }
          title1='contact'
          list1={['+1 250 999 1111','themasterchef@food.com']}
          title2='find us'
          list2={['111 El Salvador, Palermo, B.A.']}
          title3='follow us'
          list3={['Instragram','Facebook']}
          title4='more info'
          list4={['Terms and conditions','Work with us']}
        />
      </Layout>
      {/* <h1>Home</h1> */}
    </>
  )
}

export default Home