import React, { useEffect, useState } from "react"
import '../styles/cart.css'
const Cart = ({ cart, setCart }) => {
    let [price, setPrice] = useState(0)
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.price
        ))
        setPrice(ans)
    }
    useEffect(() => {
        handlePrice()
    })
    const handleRemove = (id) => {
        const rem = cart.filter((item) => (
            item.id != id
        ))
        setCart(rem)
    }
    return (
        <section>
            {
                cart.map((item) => (
                    <div className="cart-section" key={item.id}>
                        <div className="cart-box">
                            <img src={item.img} alt="" />
                            <p className="name">{item.title}</p>
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="remove-cart btn btn-primary">Remove</button>

                    </div>

                ))

            }


            <div className="total-price">
                Total price is {price}
            </div>
        </section>
    )
}

export default Cart
