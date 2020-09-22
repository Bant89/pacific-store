import React from "react"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import Table from "components/Table"
import Tag from "components/Tag"
import Button from "components/Button"
import storePlaceholder from "../../static/images/storePlaceholder.jpg"
import foodLogo from "../../static/images/foodLogo.png"
import { Container, MainImage, LeftSection, RightSection, TableContainer, LogoImage, StyledInput, SocialContainer, SocialItem } from "./styles"

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
                    <Button type="primary" style={{ marginLeft: "50%" }}>Guardar</Button>
                </div>
            </LeftSection>
            <RightSection>
                <div>
                    <h2>Categorías</h2>
                    <p>
                        <Tag selected>Hogar</Tag> <Tag>Plantas</Tag> <Tag>Electrodomesticos</Tag><Tag>Deporte</Tag><Tag selected>Salud</Tag>
                    </p>
                </div>
                <div>
                    <h2 style={{ display: "block" }}>Redes sociales</h2>
                    <SocialContainer>
                        <SocialItem><FaFacebookF size="1.5rem" /><StyledInput type="text" placeholder="Link de Facebook" /></SocialItem>
                        <SocialItem><FaInstagram size="1.5rem" /><StyledInput type="text" placeholder="Link de Instagram" /></SocialItem>
                        <SocialItem><FaWhatsapp size="1.5rem" /><StyledInput type="text" placeholder="Número de Whatsapp" /></SocialItem>
                        <SocialItem><SiGmail size="1.5rem" /><StyledInput type="text" placeholder="Correo electrónico" /></SocialItem>
                    </SocialContainer>
                </div>
            </RightSection>
            <TableContainer>
                <div>
                    <h2>Productos</h2>
                    <Button type="primary" style={{ marginLeft: "50%" }}>Agregar productos</Button>
                </div>
                <Table />

            </TableContainer>
        </Container>
    )
}