import React from "react"
import GridItem from "components/GridItem"
import { MainContainer, ItemsContainer, StyledLink, Title } from "./styles"

export default function GridList({
  name = "Most selled",
  link = "#",
  type = "product",
}) {
  let ans = []
  for (let i = 0; i < 4; i++) {
    ans.push(<GridItem type={type} name={type} />)
  }
  return (
    <MainContainer>
      <Title>{name}</Title>
      <ItemsContainer>{ans}</ItemsContainer>
      <StyledLink to={link}> See more </StyledLink>
    </MainContainer>
  )
}
