import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import useUser from "hooks/useUser"
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
  const { isLogged, logout } = useUser()

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)")
    if (mediaQueryList.matches) setDisplay(true)
    console.log("IS LOGGED ", isLogged)
  }, [isLogged])

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
              }}
            >
              <IoMdMenu size="36px" />
            </IconButton>
          </HeaderItem>
          <HiddenContainer display={display ? "flex" : "none"}>
            <HeaderItem>
              <StyledLink to="/products">Products</StyledLink>
            </HeaderItem>
            <HeaderItem>Search</HeaderItem>
            <HeaderItem>
              {isLogged ? (
                <StyledLink
                  to="/"
                  onClick={() => {
                    logout()
                  }}
                >
                  Logout
                </StyledLink>
              ) : (
                <StyledLink to="/login">Login</StyledLink>
              )}
            </HeaderItem>
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
