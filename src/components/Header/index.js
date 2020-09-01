import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import useUser from "hooks/useUser"
import { IoMdMenu } from "react-icons/io"

import {
  H1,
  StyledLink,
  StyledHeader,
  Container,
  HiddenContainer,
  HeaderList,
  HeaderItem,
  IconButton
} from "./styles"

export const Header = ({ siteTitle }) => {
  const [display, setDisplay] = useState(true)
  const { isLogged, logout } = useUser()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setDisplay(true)
    }
    window.addEventListener("resize", handleResize)
    console.log(`Is Logged ? `, isLogged)
    return function cleanup() {
      window.removeEventListener("resize", handleResize)
    }
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
          {display && <HiddenContainer>
            <HeaderItem>
              <StyledLink to="/stores">Stores</StyledLink>
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/products">Products</StyledLink>
            </HeaderItem>
            <HeaderItem>Search</HeaderItem>
            <HeaderItem>
              {isLogged ? (
                <StyledLink
                  to="/"
                  onClick={logout}
                >
                  Logout
                </StyledLink>
              ) : (
                  <StyledLink to="/login">Login</StyledLink>
                )}
            </HeaderItem>
            <HeaderItem>
              <StyledLink to="/shoppingCart">Cart</StyledLink>
            </HeaderItem>
          </HiddenContainer>}
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
