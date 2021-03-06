import styled from "styled-components"
import { COLORS } from "utils/constants"

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  max-width: 1200px;
  padding: 0 1.0875rem 1.45rem;
  overflow-x: hidden;
  font-family: 'Open Sans', Ubuntu;
  background-color: ${COLORS.background.primary};
`
