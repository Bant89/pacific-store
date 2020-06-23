import React from "react"
import { Container, CategoryName, Image } from "./styles"

export default function CarouselItem() {
  return (
    <Container>
      <Image src="https://loremflickr.com/200/150" alt="category image" />
      <CategoryName>Category Name</CategoryName>
    </Container>
  )
}
