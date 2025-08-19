export class Matrix {
  constructor(string) {
    let stringRows = string.split("\n");
    this._rows = stringRows.map(item => item.split(" ").map(str => Number(str)));
    
    this._columns = this._rows[0].map((_, i) => this._rows.map((row) => row[i])); // It just the code below but looks more complex
    // for (let i = 0; i < this.rows[0].length; i++) {
    //   this._columns.push(this._rows.map(item => item[i]));
    // }
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
