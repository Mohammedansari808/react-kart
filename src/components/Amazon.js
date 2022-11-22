import React from "react"
import Cards from "./Cards"
import list from "../data"
const Amazon = ({ handleClick, disable }) => {
    return (
        <section>
            <div className="container">
                <div className="card-deck">
                    {

                        list.map((item) => (

                            <Cards item={item} key={item.id} handleClick={handleClick} disable={disable} />
                        ))
                    }
                </div></div>


        </section>
    )
}

export default Amazon