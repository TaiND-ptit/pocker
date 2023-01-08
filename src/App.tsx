import { useEffect, useState } from "react";
import type { IUser } from "types/user.type";
import User from "components/User/User";
import Computer from "components/Computer/Computer";
import Table from "components/Table/Table";
import { getRandomCards } from "utils/getDeckOfCard";
import { findWinner } from "utils/calcPoint";
import { motion, Variants } from "framer-motion";
import { dataUsers } from "data/users";
import {  
   Container,
   Menu,
   InforGame,
   BetMoneyWrap,
   Notification,
   NotificationWrap,
   WinnerUser,
   NewGameButton,
   QuitGameButton,
   Button
  } from './App.styled'

const App = () => {
  const [isStartDistributeCards, setIsStartDistributeCards] = useState(false);
  const [isEndDistributeCards, setIsEndDistributeCards] = useState(false);
  const [isFlipCard, setIsFlipCard] = useState(false);
  const [isStartGame, setIsStartGame] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const bets = 100;

  const [listUser, setListUser] = useState<IUser[]>(dataUsers as IUser[]);

  const [winnerPlayers, setWinnerPlayers] = useState<IUser[]>([]);

  const variants: Variants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const handleStartDistributeCards = () => {
    if (isFlipCard) return;

    setIsStartDistributeCards(true);
    setWinnerPlayers([]);

    const listCardsRandom = getRandomCards();
    const cardsUser = listCardsRandom.slice(0, 3);
    const cardsComputer1 = listCardsRandom.slice(3, 6);
    const cardsComputer2 = listCardsRandom.slice(6, 9);
    const cardsComputer3 = listCardsRandom.slice(9, 12);

    const _listUser: IUser[] = JSON.parse(JSON.stringify(listUser));

    _listUser[0].cards = cardsUser;
    _listUser[1].cards = cardsComputer1;
    _listUser[2].cards = cardsComputer2;
    _listUser[3].cards = cardsComputer3;

    setListUser(_listUser);
  };

  const handleFlipCard = () => {
    if (isFlipCard) return;

    setIsFlipCard(true);

    const arrayWinners = findWinner(listUser);

    const idsWinners = arrayWinners.map((user) => user.id);

    let _listUser: IUser[] = JSON.parse(JSON.stringify(listUser));

    _listUser = _listUser.map((user) =>
      idsWinners.includes(user.id)
        ? { ...user, money: (user.money += (bets * 3) / arrayWinners.length) }
        : { ...user, money: (user.money -= bets) }
    );

    setListUser(_listUser);
    setWinnerPlayers(arrayWinners);

    setTimeout(() => {
      setShowNotification(true);
    }, 3000);
  };

  const handleNewRound = () => {
    setWinnerPlayers([]);
    setShowNotification(false);
    setIsFlipCard(false);
    setIsStartDistributeCards(false);
    setIsEndDistributeCards(false);
  };

  const resetNewGame = () => {
    setIsStartDistributeCards(false);
    setWinnerPlayers([]);
    setShowNotification(false);
    setIsFlipCard(false);
    setIsStartDistributeCards(false);
    setIsEndDistributeCards(false);
    setListUser(dataUsers as IUser[]);
    setIsStartGame(false);
  };

  useEffect(() => {
    if (!isStartDistributeCards) return;

    const id = setTimeout(() => {
      setIsEndDistributeCards(true);
    }, 4000);

    return () => clearTimeout(id);
  }, [isStartDistributeCards]);

  return (
    <Container>
      {!isStartGame ? (
        <Menu>
          <Button onClick={() => setIsStartGame(true)}>Bắt đầu</Button>
        </Menu>
      ) : (
        <>
          {showNotification && (
            <Notification>
              <NotificationWrap>
                <WinnerUser
                  variants={variants}
                  animate={winnerPlayers.length > 0 ? "show" : "hide"}
                >
                  {winnerPlayers.map((user) => user.name)} Win 
                </WinnerUser>
                <NewGameButton onClick={handleNewRound}>
                  New Round
                </NewGameButton>
                <QuitGameButton
                  onClick={resetNewGame}
                >
                  Quit
                </QuitGameButton>
              </NotificationWrap>
            </Notification>
          )}
        </>
      )}

      <InforGame>
        <BetMoneyWrap>
          <div>Mức cược :</div>
          <div>{bets}</div>
        </BetMoneyWrap>
      </InforGame>

      <Table
        isStartDistributeCards={isStartDistributeCards}
        isFlipCard={isFlipCard}
      />

      {listUser.map((user) => {
        if (user.typeUser === "computer") {
          return (
            <Computer
              bets={bets}
              user={user}
              key={user.id}
              isFlipCard={isFlipCard}
              winnerPlayers={winnerPlayers}
            />
          );
        }

        return (
          <User
            winnerPlayers={winnerPlayers}
            bets={bets}
            key={user.id}
            user={user}
            isFlipCard={isFlipCard}
            handleStartDistributeCards={handleStartDistributeCards}
            handleFlipCard={handleFlipCard}
            isStartDistributeCards={isStartDistributeCards}
            isEndDistributeCards={isEndDistributeCards}
          />
        );
      })}
    </Container>
  );
};

export default App;
