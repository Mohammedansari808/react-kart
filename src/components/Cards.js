import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

const Cards = ({ item, handleClick, disable }) => {
    const { title, author, price, img } = item

    return (
        <section>

            <div className='card'>
                <img className="card-img-top product-image" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Rs:{price}</p>
                    <button disabled={disable} onClick={() => handleClick(item)} class="btn btn-primary">Go to kart</button>
                </div>
            </div>
        </section>


    )




}
export default Cards