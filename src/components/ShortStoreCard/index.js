import React from "react"
import { IoIosStar } from "react-icons/io"
import { Link } from "gatsby"
import foodTable from "../../static/images/foodTable.jpg"
import foodLogo from "../../static/images/foodLogo.png"
import { Container, Image, LogoImage, StoreRank, StoreName } from "./styles"

export default function ShortStoreCard() {
  return (
    <Container>
      <Image src={foodTable} alt="Store hero" />
      <LogoImage src={foodLogo} alt="Store logo" />
      <StoreRank><IoIosStar color="goldenrod" /> 4.5(500)</StoreRank>
      <StoreName>Tienda de comida</StoreName>
    </Container>
  )
}
