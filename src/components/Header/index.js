import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { IoMdMenu } from "react-icons/io"

import {
  H1,
  StyledLink,
  StyledHeader,
  Container,
  HeaderList,
  HeaderItem,
  IconButton,
  HiddenContainer,
} from "./styles"

export const Header = ({ siteTitle }) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)")
    if (mediaQueryList.matches) setDisplay(true)
  })

  return (
    <StyledHeader>
      <Container>
        <HeaderList>
          <HeaderItem>
            <H1>
              <StyledLink to="/">{siteTitle}</StyledLink>
            </H1>
            <IconButton
              onClick={() => {
                setDisplay(!display)
                console.log("TEnemo to")
              }}
            >
              <IoMdMenu size="36px" />
            </IconButton>
          </HeaderItem>
          <HiddenContainer display={display ? "flex" : "none"}>
            <HeaderItem>Stores</HeaderItem>
            <HeaderItem>Products</HeaderItem>
            <HeaderItem>Search</HeaderItem>
            <HeaderItem>Profile</HeaderItem>
            <HeaderItem>Shopping Cart</HeaderItem>
          </HiddenContainer>
        </HeaderList>
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
