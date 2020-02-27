export class Column {
    constructor(number) {
        this.number = number;
        this.column = [null, null, null, null, null, null];
    }

    add(turn) {
        for (let i = 6; i >= 0; i--) {
            if (this.column[i] === null) {
                this.column[i] = turn;
                break;
            }
        }
    }

    getTokenAt(row) {
        return this.column[row];
    }

    isFull() {
        let notAvailable = true;
        for (let i = 0; i < this.column.length; i++) {
            if (this.column[i] === null) {
                notAvailable = false;
                return notAvailable;
            }
        }
        return notAvailable;
    }
}