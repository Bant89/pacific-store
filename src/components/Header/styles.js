import styled from "styled-components"
import { Link } from "gatsby"

export const H1 = styled.h1`
  color: yellow;
  display: inline-block;
  font-size: 1.4em;
  margin: auto 0;
`

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
  marginbottom: 1.45rem;
`
export const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
`
export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HiddenContainer = styled.div`
  display: ${props => props.display};
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HeaderItem = styled.li`
  list-style: none;
  padding: 0.35em 1em;
  text-transform: uppercase;
  font-family: "Segoe UI", Roboto;
  width: 100%;
  text-align: center;
  &:active {
    background-color: red;
  }

  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
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
