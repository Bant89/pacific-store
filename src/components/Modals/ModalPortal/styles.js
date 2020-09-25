import { Link } from "gatsby"
import styled from 'styled-components'
import { COLORS } from 'utils/constants'

export const Container = styled.div`
    display: grid;
    grid-template-areas:
    "x . ."
    ". content content"
    ". content content"
    ". content content"
    ". content content";
    padding: 0.5em;
    width: 30vw;
    min-width: 300px;
    margin: 0 auto;
    height: 70vh;
    background-color: white;
`;

export const CloseButton = styled.button`
    height: auto;
    width: auto;
    border: none;
    display: grid;
    padding: 0;
    place-items: center center;
    background-color: transparent;
`;

export const ContentContainer = styled.div`
    grid-area: content;
    justify-self: start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-top: 1em;

    span {
        color: ${COLORS.background.primary};
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

export const StyledLink = styled(Link)`
    color: ${COLORS.background.primary};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        transform: translateY(-5px);
    }
`;

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: start;    
    
    font-weigth: bold;
   label {
       margin-bottom: 5px;
   }
    input {
        border: 1px solid ${COLORS.background.primary};
        border-radius: 15px;
        padding: 0.5em;
        outline: none;
    }
`;