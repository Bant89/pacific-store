import styled from "styled-components"

export const ItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`
export const MainContainer = styled.div`
  margin: 1em 0;
  max-width: 100vw;
  text-align: left;
`
export const HeadContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;