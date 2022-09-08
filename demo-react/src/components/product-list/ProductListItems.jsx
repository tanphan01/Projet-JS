const ProductListItem = (props) => {
    const {id, name, price, promo} = props
    // age>18 ? "majeur" : "mineur"



    return (
        <div>
            <h3>{name}</h3>
            <p>{id}</p>
    
            <p className={promo ? "red" : "blue"}>{price}</p>
        </div>
    )
}

export default ProductListItem