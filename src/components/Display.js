import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations"

const fadeAni = keyframes`${fadeIn}`;

const Display = styled.p`
    transition: all 1s ${fadeAni};
    width: 400px;
    border: solid 2px rgb(230, 230, 230);
    padding: 30px;
`;

export default Display;