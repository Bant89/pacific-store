import styled from "styled-components"
import { Link } from "gatsby"

export const H1 = styled.h1`
  color: yellow;
  display: inline-block;
  font-size: 1.4rem;
  margin: auto 0;
`

export const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: 0;
  color: white;
  @media (min-width: 768px) {
    display: none;
  }
`
export const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  font-family: Roboto;
`
export const Container = styled.div`
  margin: 0 auto 1em auto;
  max-width: 960;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
`
export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  max-width: 1080px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const HeaderItem = styled.li`
  list-style: none;
  padding: 0.7em 1em;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  &:active {
    background-color: red;
  }

  &:hover {
    cursor: pointer;
  }
`

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-shadow: none;
`