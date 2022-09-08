import ProductListItem from "./ProductListItems"

const ProductList = (props) => {

    const {products} = props

    const productsJSX = products.map(
        p => <ProductListItem key={p.id} name={p.name} id={p.id} price={p.price} promo={p.promo}></ProductListItem>
    )

    return (
        <div>
            <ul>
                {productsJSX}
            </ul>
        </div>
    )
}

export default ProductList