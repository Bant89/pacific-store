import React from "react"
import CarouselItem from "components/CarouselItem"
import { MainContainer, ItemContainer } from "./styles"

export default function CarouselList() {
  let ans = []

  for (let i = 0; i < 3; i++) {
    ans.push(<CarouselItem />)
  }
  return (
    <MainContainer>
      <h3>Categories</h3>
      <ItemContainer>{ans}</ItemContainer>
      <a href="#">See more</a>
    </MainContainer>
  )
}
