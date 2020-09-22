import styled from "styled-components"
import { COLORS } from "utils/constants"

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    height: 35vh;
    margin: 1em auto;
    padding: 1em;
    border-radius: 20px;
    background-color: ${COLORS.background.inactiveSecondary};
    & > h3 {
        color: ${COLORS.foreground.primary}
    }

    @media(max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }

`

export const MainImage = styled.img`
    border-radius: 15%;
    width: 30%;
    height: 70%;
    
    @media(max-width: 768px) {
        width: 100%;
    }
`

export const SectionList = styled.section`
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    
    @media(max-width: 768px) {
        width: 100%;
    }
`

export const ProductItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 12vh;
    p {
        font-weight: bolder;
        margin-bottom: 0.5em;
    }
`

export const ProductImage = styled.img`
    width: 100px;
    height: 10vh;
    border-radius: 15px;
`
