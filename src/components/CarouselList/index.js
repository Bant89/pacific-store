import React from "react"
import { MainContainer, ItemContainer, HeadContainer } from "./styles"

export default function CarouselList({ title, items = [] }) {
  return (
    <MainContainer>
      <HeadContainer>
        <h3>{title}</h3><a href="/probando">See more</a>
      </HeadContainer>
      <ItemContainer>{items}</ItemContainer>
    </MainContainer>
  )
}
