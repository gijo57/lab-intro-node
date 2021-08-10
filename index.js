class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, cur) => acc + cur, 0);
  }

  avg() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
