import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import type { Position } from "types/user.type";
export const Container = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  ${(props: { position: Position }) => {
    switch (props.position) {
      case "left":
        return css`
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          flex-direction: row-reverse;
        `;
      case "top":
        return css`
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: row-reverse;
        `;

      default:
        break;
    }
  }}
`;
export const InforWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const AvatarWrap = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Money = styled.div`
  color: yellow;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Name = styled.div`
  color: white;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Point = styled(motion.div)`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
    -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
    -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
`;
export const MoneyBets = styled(motion.div)`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
    -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
    -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
`;