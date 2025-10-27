import {type Suit, SuitEnum, type TileValue} from "@/types/game.ts";

export const SUITS = Object.values(SuitEnum) as Suit[];
export const VALUES: TileValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const INITIAL_HAND_SIZE = 14;
export const QUARANTINE_THRESHOLD = 30;