import {Artist} from "./artist";
import {Concerthall} from "./concerthall";

export interface Concert {
  id: number,
  price: number,
  description: String,
  time: String,
  artist: Artist,
  concertHall: Concerthall
}
