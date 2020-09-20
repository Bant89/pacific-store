import styled from "styled-components"
import { Link } from "gatsby"

export const ItemsContainer = styled.div`
  display: flex;
  max-width: 800px;
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
  margin: 1em 0;
`

export const StyledLink = styled(Link)`
  color: purple;
  font-size: 1.2em;
`
export const HeadContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;