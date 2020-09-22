import styled from "styled-components"
import { COLORS } from "utils/constants"
export const Container = styled.div`
    margin-top: 1em;
    width: 60vw;
    height: auto;
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #707070;
    display: grid;
    grid-template-areas:
    "image image"
    "left right"
    "table table";
    align-items: start;
    justify-items: center;
    h2 {
        color: ${COLORS.background.primary};
    }
`;

export const MainImage = styled.img`
    grid-area: image;
    width: 100%;
    height: 40vh;
`;

export const LeftSection = styled.section`
    width: 100%;
    grid-area: left;
    padding: 1em;
`;

export const RightSection = styled.section`
    width: 100%;
    padding: 1em;
    grid-area: right;
`;


export const TableContainer = styled.section`
    grid-area: table;
    place-self: start stretch;
    & > div {
        display: flex;
        justify-content: space-around;
    }


`;

export const LogoImage = styled.img`
    border-radius: 50%;
    width: 150px; 
    height: 150px;
    margin: 0 auto;
    display: block;
`;

export const StyledInput = styled.input`
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    width: 85%;
    &:active {
        border: none;
        border-bottom: 2px solid #333;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SocialItem = styled.p`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`;