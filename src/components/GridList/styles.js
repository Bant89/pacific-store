import styled from "styled-components"
import { Link } from "gatsby"

export const ItemsContainer = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Title = styled.h2`
  margin: 0;
  color: purple;
`

export const MainContainer = styled.div`
  text-align: left;
`

export const StyledLink = styled(Link)`
  color: purple;
  font-size: 1.2em;
`
