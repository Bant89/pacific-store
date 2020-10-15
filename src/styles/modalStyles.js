import { Link } from "gatsby"
import styled from 'styled-components'
import { COLORS } from 'utils/constants'

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
`;

export const ModalContainer = styled.div`
    display: grid;
    grid-template-areas:
    "x . ."
    ". content content"
    ". content content"
    ". content content"
    ". content content";
    padding: 0.5em;
    width: 100%;
    background-color: #f6f6f6;
    
    @media(min-width: 768px) {
        width: 450px;
    }
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

export const ModalContentContainer = styled.div`
    grid-area: content;
    justify-self: start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 1em;

    span {
        color: ${COLORS.background.primary};
        font-size: 1.2rem;
        font-weight: bold;
    }

    & > button {
        margin-bottom: 1em;
    }
`;

export const StyledLink = styled(Link)`
    color: ${COLORS.background.primary};
    text-decoration: none;
    text-align: center;
    &:hover {
        text-decoration: underline;
        transform: translateY(-5px);
    }
`;

export const ModalFormItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: start;    
    font-weigth: bold;
    margin-bottom: 1em;
    max-width: 250px;
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