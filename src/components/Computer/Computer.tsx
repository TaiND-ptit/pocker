
import type { IUser } from "types/user.type";
import { ListCardUser } from "components/User/User.styled";
import { ICard } from "types/card.type";
import calcPoint from "utils/calcPoint";
import { Variants } from "framer-motion";
import { Container, InforWrap, AvatarWrap, AvatarImage, Money, Name, Point, MoneyBets } from './Computer.styled'
import Card from "components/Card/Card";


interface IComputer {
  bets: number;
  user: IUser;
  isFlipCard: boolean;
  winnerPlayers: IUser[];
}

const Computer = ({ user, isFlipCard, winnerPlayers, bets }: IComputer) => {
  const pointComputer = user.cards.reduce(
    (sum: number, card: ICard) => sum + card.number,
    0
  );

  const pointVariants: Variants = {
    hide: {
      opacity: 0,
      y: 50,
      display: "none",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const moneyBetsVariants: Variants = {
    hide: {
      opacity: 0,
      y: 100,
      display: "none",
    },
    show: {
      opacity: 1,
      y: 50,
      transition: {
        duration: 1,
      },
    },
  };
  const checkIsWinner = () =>
    winnerPlayers.some((winnerPlayer) => winnerPlayer.id === user.id);

  return (
    <Container position={user.position}>
      <InforWrap>
        <Name>{user.name}</Name>
        <AvatarWrap>
          <AvatarImage src={user.avatar} alt={user.name} />
        </AvatarWrap>
        <Money>{user.money}</Money>
      </InforWrap>
      <ListCardUser>
        {isFlipCard && (
          <>
            {user.cards.map((card, index) => (
              <Card key={index} card={card} isFlipCard={isFlipCard} />
            ))}
          </>
        )}
        <Point variants={pointVariants} animate={isFlipCard ? "show" : "hide"}>
          {calcPoint(pointComputer)} điểm
        </Point>
        <MoneyBets
          variants={moneyBetsVariants}
          animate={isFlipCard ? "show" : "hide"}
        >
          {checkIsWinner()
            ? `+ ${(bets * 3) / winnerPlayers.length} `
            : `- ${bets}`}
        </MoneyBets>
      </ListCardUser>
    </Container>
  );
};

export default Computer;