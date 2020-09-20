import React from "react"
import GridItem from "components/GridItem"
import { MainContainer, ItemsContainer, HeadContainer, StyledLink, Title } from "./styles"
import CategoryItem from "components/CategoryItem"
export default function GridList({
  name = "Most selled",
  link = "#",
  type = "product",
}) {
  let ans = []
  for (let i = 0; i < 8; i++) {
    // ans.push(<GridItem type={type} name={type} />)
    ans.push(<CategoryItem />)
  }
  return (
    <MainContainer>
      <HeadContainer>
        <Title>{name}</Title>
        <StyledLink to={link}> See more </StyledLink>
      </HeadContainer>
      <ItemsContainer>
        {ans}
      </ItemsContainer>
    </MainContainer>
  )
}
