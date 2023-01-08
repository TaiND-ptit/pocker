import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  position: relative;
  max-width: 1366px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
`;
export const Menu = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  padding: 1rem;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const InforGame = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 90;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
`;
export const BetMoneyWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Notification = styled.div`
  position: absolute;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const NotificationWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const WinnerUser = styled(motion.div)`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
    -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
    -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
`;
export const NewGameButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
`;
export const QuitGameButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: red;
`;
export const Button = styled.button `
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
`;

