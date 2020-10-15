import styled from "styled-components"
import { COLORS } from "utils/constants"

export const StyledButton = styled.button`
    padding: 0.5em;
    border-radius: 11px;
    background-color: ${COLORS.background.primary};
    color: ${COLORS.foreground.primary};
    border: none;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        -moz-transform: translateY(-4px);
        -ms-transform: translateY(-4px);
        -o-transform: translateY(-4px);
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
`;

export const InactiveButton = styled(StyledButton)`
    background-color: ${COLORS.background.inactivePrimary};
    color: ${COLORS.foreground.inactivePrimary};
`;

export const SecondaryButton = styled(StyledButton)`
    background-color: ${COLORS.background.secondary};
    color: ${COLORS.foreground.secondary};
`;


export const InactiveSecondaryButton = styled(StyledButton)`
    background-color: ${COLORS.background.inactiveSecondary};
    color: ${COLORS.foreground.inactiveSecondary};
`;