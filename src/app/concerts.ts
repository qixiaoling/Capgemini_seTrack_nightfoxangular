import {Artist} from "./artist";
import {Concerthall} from "./concerthall";

export interface Concert {
  id: number,
  price: number,
  description: String,
  time: Date,
  artist: Artist,
  concertHall: Concerthall
}
