import styled from "styled-components"
import { COLORS } from "utils/constants"
export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid rgba(209, 205, 205, 0.5);
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      :last-child {
        border-right: 0;
      }
    }
  }

  th {
    color: ${COLORS.background.secondary};
    text-align: center;
  }

  td > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  tbody > tr:last-child {
      border-bottom-left-radius: 10px;
  }
`

export const ProductImage = styled.img`
    width: 75px;
    height: 75px;
    margin: 0 auto;
`;