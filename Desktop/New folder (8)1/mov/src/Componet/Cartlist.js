function CartList({cart})
{
    return(
        <div>
            {
                cart.map((cartItem,cartindex)=>{
                    return(
                        <div>
                            <h1><img src={cartItem.url}/></h1>
                            <p>{cartItem.name}</p>
                            <p>{cartItem.price}</p>
                            <button>+</button>
                            <p>{cartItem.quantity}</p>
                            <button>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CartList;