import React from "react"
import storePlaceholder from "../../static/images/storePlaceholder.jpg"
import foodLogo from "../../static/images/foodLogo.png"
import { Container, MainImage, LeftSection, RightSection, Table, LogoImage } from "./styles"

export default function StoreViewer() {

    return (
        <Container>
            <MainImage src={storePlaceholder} alt="store banner" />
            <LeftSection>
                <div>
                    <h2>Nombre Tienda</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div>
                    <h2>Logo</h2>
                    <LogoImage src={foodLogo} alt="store logo" />
                </div>
            </LeftSection>
            <RightSection>
                <div>
                    <h2>Categorías</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
                <div>
                    <h2>Redes sociales</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
            </RightSection>
            <Table><h2>Table</h2></Table>
        </Container>
    )
}