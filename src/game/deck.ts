import type {Tile} from "@/types/game.ts";
import {SUITS, VALUES} from "@/constants/game.ts";

// Generate game deck
// 106 tiles: 2 copies × 4 suits × 13 values + 2 jokers
export function createDeck(): Tile[] {
    const tiles: Tile[] = [];

    // Create 2 copies of each tile
    for (let copy = 0; copy < 2; copy++) {
        for (const suit of SUITS) {
            for (const value of VALUES) {
                tiles.push({
                    id: `${suit}-${value}-${copy}`,
                    suit,
                    value
                });
            }
        }
    }

    // TODO: Add 2 jokers after base validation
    // tiles.push(
    //     {id: 'joker-1', suit: 'joker', value: 0},
    //     {id: 'joker-2', suit: 'joker', value: 0}
    // );

    return shuffle(tiles);
}


// Fisher–Yates shuffle algorithm
function shuffle(array: Tile[]) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}