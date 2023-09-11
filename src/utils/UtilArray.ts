/**
 * Array with utility methods
 */
class UtilArray<T> extends Array<T> {
  constructor(...items: T[]) {
    super(...items);
  }
  /**
   * Filters the array and returns the filtered array
   * @param fn Callback function to execute on each value in the array
   * @returns UtilArray
   */
  innerFilter(fn: (value: T, index: number, array: T[]) => unknown): UtilArray<T> {
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      if (!fn(element, i, this)) {
        this.remove(element);
        i--;
      }
    }

    return this;
  }

  /**
   * Remove an item from the array
   * @param itemOrId The item to remove from the array
   * @returns True if the item was removed, false if the item was not found in the array
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.remove(3);
   * console.log(removed); // true
   * console.log(array); // [1, 2, 4, 5]
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.remove(6);
   * console.log(removed); // false
   * console.log(array); // [1, 2, 3, 4, 5]
   */
  remove(itemOrId: any) {
    let index = this.indexOf(itemOrId) || this.findIndex((i: any) => i.id === itemOrId);
    if (index >= 0) {
      this.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Remove an item from the array
   * @param itemOrId The item to remove from the array
   * @returns True if the item was removed, false if the item was not found in the array
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.remove(3);
   * console.log(removed); // true
   * console.log(array); // [1, 2, 4, 5]
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.remove(6);
   * console.log(removed); // false
   * console.log(array); // [1, 2, 3, 4, 5]
   */
  delete(itemOrId: any) {
    let index = this.indexOf(itemOrId) || this.findIndex((i: any) => i.id === itemOrId);
    if (index >= 0) {
      this.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Remove an item from the array
   * @param itemOrId The item to remove from the array
   * @returns True if the item was removed, false if the item was not found in the array
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.remove(3);
   * console.log(removed); // true
   * console.log(array); // [1, 2, 4, 5]
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.remove(6);
   * console.log(removed); // false
   * console.log(array); // [1, 2, 3, 4, 5]
   */
  del(itemOrId: any) {
    let index = this.indexOf(itemOrId) || this.findIndex((i: any) => i.id === itemOrId);
    if (index >= 0) {
      this.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Check if the array has an item
   * @param itemOrId The item to check for
   * @returns True if the array has the item, false if not
   */
  has(itemOrId: any, fromIndex?: number | undefined): boolean {
    return super.includes(itemOrId, fromIndex) || !!this.find((i: any) => i.id === itemOrId);
  }

  /**
   * Check if the array has an item
   * @param itemOrId The item to check for
   * @returns True if the array has the item, false if not
   */
  includes(itemOrId: any, fromIndex?: number | undefined): boolean {
    return super.includes(itemOrId, fromIndex) || !!this.find((i: any) => i.id === itemOrId);
  }

  /**
   * Remove an item from the array by index
   * @param index The index of the item to remove from the array
   * @param count The number of items to remove from the array
   * @returns The removed item
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.removeAt(2, 2);
   * console.log(removed); // [3, 4]
   * console.log(array); // [1, 2, 5]
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.removeAt(2);
   * console.log(removed); // [3]
   * console.log(array); // [1, 2, 4, 5]
   * @example
   * let array = [1, 2, 3, 4, 5];
   * let removed = array.removeAt(2, 0);
   * console.log(removed); // []
   * console.log(array); // [1, 2, 3, 4, 5]
   */
  removeAt(index: number, count: number = 1): T[] {
    if (index < 0 || index >= this.length) {
      return [];
    }

    if (count <= 0) {
      return [];
    }

    let removed = this.slice(index, index + count);
    this.splice(index, count);
    return removed;
  }

  /**
   * Remove all items from the array
   * @example
   * let array = [1, 2, 3, 4, 5];
   * array.clear();
   * console.log(array); // []
   */
  clear() {
    this.length = 0;
  }

  /**
   * Add an item to the array if it does not already exist
   * @param itemOrId The item to add to the array
   * @returns The item that was added to the array
   * @example
   * let array = [1, 2, 3, 4, 5];
   * array.addIfNotExists(3);
   * console.log(array); // [1, 2, 3, 4, 5]
   * @example
   * let array = [1, 2, 3, 4, 5];
   * array.addIfNotExists(6);
   * console.log(array); // [1, 2, 3, 4, 5, 6]
   */
  addIfNotExists(itemOrId: T) {
    if (!this.includes(itemOrId) && !this.find((i: any) => i.id === itemOrId)) {
      this.push(itemOrId);
    }
    return itemOrId;
  }
}

export default UtilArray;
