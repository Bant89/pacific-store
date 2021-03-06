import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1em;
  display: grid;
  height: auto;
  width: 35vw;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "field"
    "field"
    "field"
    "actions";
  column-gap: 2em;
  row-gap: 1em;
  @media (max-width: 768px) {
    width: auto;
    column-gap: 1.5em;
    row-gap: 1.5em;
  }
`;

export const FieldSection = styled.div`
  grid-area: field;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  min-width: 275px;
  text-align: left;
  border-bottom: none;
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    padding-bottom: 1.5em;
  }
`;

export const MainFormContainer = styled.div`
  width: auto;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 3em;
  border-radius: 10px;
  -webkit-box-shadow: 0px 20px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 20px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 20px 5px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 1em;
    border: none;
    box-shadow: none;
  }
`;

export const ActionSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: actions;
`;

export const CompactActionSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 15vw;
  & > a:nth-child(2) {
    color: #023944;
  }
`;

export const AdditionalInfo = styled.p`
  overflow-wrap: break-word;
  max-width: 250px;
  margin: 0.25em 0;
`;