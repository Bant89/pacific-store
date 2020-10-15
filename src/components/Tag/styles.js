import styled from "styled-components"
import { COLORS } from "utils/constants"

export const Container = styled.div`
    display: inline-block;
    margin: 0.5em;
    border-radius: 15px;
    width: auto;
    padding: 0.5em;
    color: ${props => props.selected ? COLORS.background.primary : COLORS.foreground.secondary};
    background-color: ${COLORS.foreground.primary};
    border: 1px solid ${props => props.selected ? COLORS.background.primary : COLORS.foreground.secondary};

    &:hover {
        color: ${props => props.selected ? COLORS.foreground.primary : COLORS.foreground.primary};
        background-color: ${props => props.selected ? COLORS.background.primary : COLORS.foreground.secondary};
        cursor: pointer;
    }
`;