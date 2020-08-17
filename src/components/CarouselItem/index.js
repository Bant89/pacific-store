import React from "react"
import { Link } from "gatsby"
import { Container, CategoryName, Image } from "./styles"

export default function CarouselItem() {
  return (
    <Container>
      <Link to="/productDetail">
        <Image src="./images/productPlaceholder.jpg" alt="category image" />
        <CategoryName>Category Name</CategoryName>
      </Link>
    </Container>
  )
}
