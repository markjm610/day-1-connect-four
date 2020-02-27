import { Column } from './column.js';

export class Game {
    constructor(p1Name, p2Name) {
        this.p1Name = p1Name;
        this.p2Name = p2Name;
        this.turn = 1;
        this.columns = [
            new Column(0),
            new Column(1),
            new Column(2),
            new Column(3),
            new Column(4),
            new Column(5),
            new Column(6)
        ]
    }
    getName() {
        return `${this.p1Name} vs. ${this.p2Name}`;
    }

    playInColumn(columnNumber) {
        let thisColumn = this.columns[columnNumber];
        thisColumn.add(this.turn);

        if (this.turn === 1) {
            this.turn = 2;
        } else {
            this.turn = 1;
        }
    }

    getTokenAt(rowNumber, columnNumber) {
        return this.columns[columnNumber].getTokenAt(rowNumber);
    }

    isColumnFull(columnNumber) {
        return this.columns[columnNumber].isFull();

    }

}