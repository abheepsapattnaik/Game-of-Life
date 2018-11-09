import {DEAD, LIVE} from "./State";
import Cell from './Cell';

export default class Position {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  isValid() {
    return this.row > 0 && this.column > 0;
  }

  neighbors() {
    let neighbor = [];
    neighbor.add(new Position(this.row + 1, this.column));
    neighbor.add(new Position(this.row - 1, this.column));
    neighbor.add(new Position(this.row, this.column + 1));
    neighbor.add(new Position(this.row, this.column - 1));
    neighbor.add(new Position(this.row + 1, this.column + 1));
    neighbor.add(new Position(this.row + 1, this.column - 1));
    neighbor.add(new Position(this.row - 1,this.column + 1));
    neighbor.add(new Position(this.row - 1, this.column - 1));

    return neighbor;
  }


}