import styled from "styled-components"

export const ReviewListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  grid-template-rows: auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
