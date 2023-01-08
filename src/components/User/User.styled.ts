
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
export const ListCardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;
export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MoneyUser = styled.div`
  color: yellow;
  text-align: center;
  min-width: 5rem;
  padding: 1rem;
  border-radius: 2rem;
  width: 15rem;
  background-color: #3b313a;
  text-transform: uppercase;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-weight: 700;
  border: 2px solid white;
`;

export const Button = styled.div`
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
    width="12rem";
    .btn-flip{
        background-color: green;
    }

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
