import styled, {css} from "styled-components";
import images from "../../assets/images";
import { motion } from "framer-motion";

export const Container = styled.div`
    height: 100vh;
    background-image: url(${images.table.pokerTable});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    background-size: 70%;
`
export const CardWrap = styled.div`
  position: absolute;
  height: 10rem;
  width: 8rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
`;

export const BackSideCardImage = styled.img`
  height: 10rem;
  width: 8rem;
  cursor: pointer;
  position: absolute;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${(props: { index?: number }) => {
    switch (props.index) {
      case 1:
        return css`
          top: -4px;
          left: 4px;
        `;
      case 2:
        return css`
          top: -8px;
          left: 8px;
        `;
      default:
        break;
    }
  }}
`

export const BackSideCardAnimate = styled(motion.img)`
  box-shadow: none;
  height: 10rem;
  width: 8rem;
  cursor: pointer;
  position: absolute;
  border-radius: 4px;

  ${(props: { index?: number }) => {
    switch (props.index) {
      case 1:
        return css`
          top: -4px;
          left: 4px;
        `;
      case 2:
        return css`
          top: -8px;
          left: 8px;
        `;
      default:
        break;
    }
  }}`
