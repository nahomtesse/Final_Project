import React from "react";
function Shop() {
    return (
        <main>
            <h2>Shop at Fish Creek Animal Clinic</h2>
            <section className="shop">
                <h3>Fish Creek Tote Bag</h3>
                <img alt="Fish Creek Tote Bag" width="150" height="150" src="/fishtote.gif"></img>
                <p>Carry your pet supplies and accessories in a special tote from Fish Creek. 100% cotton. $14.95</p>

                <form method = "post" action = "#">
                    <input type="submit" value="Add to Cart" />
                </form>
            </section>

            <section className="shop">
                <h3>Fish Creek Sweatshirt</h3>
                <img alt="Fish Creek Sweatshirt" width="150" height="150" src="/fishsweat.gif"></img>
                <p>A Fish Creek sweatshirt will warm you up on cool morning walks with your pet. 100% cotton. Size XL. $29.95.</p>

                <form method="post" action="#">
                    <input type="submit" value="Add to Cart" />
                </form>
            </section>
        </main>
    )
}

export default Shop;