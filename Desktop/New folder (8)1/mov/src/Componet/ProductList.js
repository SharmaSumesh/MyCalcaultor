function ProductList({product,addToCart})
{
    return (
        <div className = "flex">
            {
                product.map((productItem,productIndex) =>{
                    return (
                        <div>
                            <div className="product-item">
                                <img src = {productItem.url}/>
                                <p>{productItem.name}</p>
                                <p>{productItem.price}</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;