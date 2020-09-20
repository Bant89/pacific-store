import React from "react"
import CarouselItem from "components/CarouselItem"
import { MainContainer, ItemContainer, HeadContainer } from "./styles"

export default function CarouselList({ title }) {
  let ans = []

  for (let i = 0; i < 6; i++) {
    ans.push(<CarouselItem />)
  }
  return (
    <MainContainer>
      <HeadContainer>
        <h3>{title}</h3><a href="/probando">See more</a>
      </HeadContainer>
      <ItemContainer>{ans}</ItemContainer>
    </MainContainer>
  )
}
