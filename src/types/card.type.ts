export type ISuit = "clubs" | "diamonds" | "hearts" | "spades";

export interface ICard {
  number: number;
  suit: ISuit;
}
export type DeckOfCard = ICard[];