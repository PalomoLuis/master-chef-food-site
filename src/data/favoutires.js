import products from './products.json';



const favourites = () => {
    let productList = [];
    productList.push(products.croin_eggs)
    productList.push(products.mole_sauce)
    productList.push(products.moito_seeds)
    productList.push(products.nonMeet_and_grill)
    productList.push(products.cereal_mix)
    productList.push(products.asian_gelato)

    return productList
}

export default favourites