export const SuitEnum = {
    RED: 'red',
    BLACK: 'black',
    YELLOW: 'yellow',
    BLUE: 'blue',
} as const

export type Suit = (typeof SuitEnum)[keyof typeof SuitEnum];

export type TileValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export interface Tile {
    id: string;
    suit: Suit;
    value: TileValue;
}

export interface TileSet {
    id: string;
    tiles: Tile[];
    type: 'run' | 'group';
}

export interface GameState {
    pool: Tile[];
    playerHand: Tile[];
    botHand: Tile[];
    table: TileSet[];
    currentPlayer: 'player' | 'bot';
    playerInQuarantine: boolean;
    botInQuarantine: boolean;
}

