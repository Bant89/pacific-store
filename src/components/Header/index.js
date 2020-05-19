import PropTypes from "prop-types"
import React from "react"

import { H1, StyledLink } from "./styles"
export const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <H1 style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
