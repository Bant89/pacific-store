import React from "react"
import { Link } from "gatsby"
import productPlaceholder from "../../static/images/productPlaceholder.jpg"
import { Container, CategoryName, Image } from "./styles"

export default function CarouselItem() {
  return (
    <Container>
      <Image src={productPlaceholder} alt="category image" />
      <Link to="/products/detail">
        <CategoryName>Category Name</CategoryName>
      </Link>
    </Container>
  )
}
