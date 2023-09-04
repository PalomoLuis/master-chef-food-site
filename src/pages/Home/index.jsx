import { useEffect, useContext } from 'react'
import Layout from '@components/Layout/index.jsx'
import Hero from '@components/Hero/index.jsx'
import TitleDivider from '@components/Dividers/TitleDivider.jsx'
import mainLogo from '@public/LogoMasterChef.svg'
import HeroImage from '@images/vegetables-cheese-black-plate.jpeg'
import { GalleryTwo, GalleryThree } from '@components/Sections/Gallery.jsx'
import bgSection1 from '@images/rock-texture.jpeg'
import { Title3 } from '@components/Text/Titles.jsx'
import favourites from '@data/favoutires.js'
import { TextCard, ImageCard, PromotionFullCard, FiftyYearsSpecialCard } from '@components/Cards/index.jsx'
import favofitePlateImage from '@images/ekaterina-bolovtsova.jpeg'
import products from '@data/products.json'
import pizzaImage from '@images/pizzas-1.jpeg'
import Footer from '@components/Sections/Footer.jsx'
import fiftyYearsImage from '@images/fifty-years-chef-cooking.jpeg'
import { CartOrder } from '@components/CartOrder/index.jsx'
import { ShoppingCartContext } from '@context/index.jsx'

function Home() {
  const pizzas = Object.values(products).filter(value => value.category.find(item => item === 'pizzas'))
  const { isCartOpen } = useContext(ShoppingCartContext)
  // const URL = 'https://api.escuelajs.co/api/v1/products/1'
  // const URL2 = 'https://pokeapi.co/api/v2/pokemon/ditto'

  // useEffect(() => {
  //   fetch(URL2)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(err => {
  //       console.error('Error :', err)
  //     })
  // }, [])

  return (
    <>
      <Layout>
        <Hero bgImage={ HeroImage }/>
        <TitleDivider title={ 'take a look at our menu' }/>
        <GalleryThree
          bgImage={ bgSection1 }
          elements={ favourites().map(value => {
            return (
              <ImageCard
                id={ value?.id }
                title={ value?.name }
                price={ value?.price }
                cta='add'
                image={ value?.image[0]}
                key={ value?.id }
              />
            )
          }) }
        >
          <Title3 color={'text-white'} extraCss={'mb-12 lg:mb-16 text-center'}>customer favourites</Title3>
        </GalleryThree>
        <PromotionFullCard
          id={ 999 }
          image={ favofitePlateImage }
          preTitle="special of the day"
          title="Ekaterina bolovtsova"
          description="Sauteed portobellos with aromas of rosemary, accompanied with cornbread with apple tints."
          price={ 8.19 }
          cta='add'
        ></PromotionFullCard>
        < TitleDivider title={ 'not enough?' }/>
        <GalleryTwo
          columns={ 2 }
          bgColor={ 'bg-silver2' }
          elements={ pizzas.map( value => {
            return (
              <TextCard
                id={ value?.id }
                title={ value?.name }
                description={ value?.description }
                price={ value?.price }
                cta='add'
                key={ value?.id }
              />
            )
          }) }
        >
          <Title3 color={'text-white'} extraCss={'mb-12 lg:mb-16 text-center'}>Pizzas</Title3>
        </GalleryTwo>
        <img src={ pizzaImage } alt="pizzas" className='h-[400px] lg:h-auto object-cover'/>
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
        {
          isCartOpen ? <CartOrder /> : null
        }
      </Layout>
      {/* <h1>Home</h1> */}
    </>
  )
}

export default Home