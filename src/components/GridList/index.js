import React from "react"
import { MainContainer, ItemsContainer, HeadContainer, StyledLink, Title } from "./styles"
export default function GridList({
  name = "Most selled",
  link = "#",
  items = []
}) {
  return (
    <MainContainer>
      <HeadContainer>
        <Title>{name}</Title>
        <StyledLink to={link}> See more </StyledLink>
      </HeadContainer>
      <ItemsContainer>
        {items}
      </ItemsContainer>
    </MainContainer>
  )
}
