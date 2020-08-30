import styled from "styled-components"

export const StyledButton = styled.button`
    padding: 0.5em;
    border-radius: 15px;
    background-color: white;
    color: rebeccapurple;
    border: 2px solid rebeccapurple;
    text-transform: uppercase;
    font-weight: 800;
    &:hover {
        background-color: rebeccapurple;
        color: white;
    }
`;