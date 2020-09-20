import React from "react"
import { IoIosStar } from "react-icons/io"
import { Container, MainImage, SectionList, ProductItem, ProductImage } from "./styles"
import foodTable from "../../static/images/foodTable.jpg"
import chickenBreast from "../../static/images/chickenBreast.jpg"
import breadProduct from "../../static/images/breadProduct.jpg"


export default function LongStoreCard() {

    return (
        <Container>
            <MainImage src={foodTable} alt="store hero" />
            <SectionList>
                <h3>Tienda de comida</h3>
                <p><IoIosStar color="goldenrod" />4.9(1300)</p>
                <p>Tienda donde podras encontrar los alimentos mas frescos para que hagas tu comida deliciosa.</p>
            </SectionList>
            <SectionList>
                <h3>Productos</h3>
                <ProductItem>
                    <ProductImage src={chickenBreast} alt="first-product" />
                    <div>
                        <p>Carne de res</p>
                        <p>$580</p>
                    </div>
                </ProductItem>
                <ProductItem>
                    <ProductImage src={breadProduct} alt="first-product" />
                    <div>
                        <p>Viga de pan</p>
                        <p>$350</p>
                    </div>
                </ProductItem>
            </SectionList>
        </Container>
    )
}