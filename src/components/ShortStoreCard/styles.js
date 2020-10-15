import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr .5fr .5fr;
  align-items: center;
  justify-items: center;
  background-color: rgba(188, 231, 253, 1);
  border-radius: 45px;
  margin-left: 0.7em;
  flex: 0 0 auto;
  max-width: 250px;
  max-height: 250px;
  margin-right: 1em;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
  border-radius: 45px 45px 0px 0px;
`

export const LogoImage = styled.img`
  border-radius: 50%;
  grid-column: 1;
  justify-self: end;
  margin: 0;
  grid-row: 3 / span 2;
  width: 70px;
  height: 70px;
`;

export const StoreRank = styled.p`
  grid-column: 2 / span 2;
  grid-row: 4;
`;

export const StoreName = styled.h3`
  grid-column: 1 / span 3;
  grid-row: 5;
  margin: 0;
  padding-bottom: .5em;
`;
