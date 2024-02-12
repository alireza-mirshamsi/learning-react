// function sort(array:number[]){
//     return array.sort()
// }

// function sort<T>(array:T[]){
//     return array.sort()
// }

function find<T>(array: T[], value:T[]):T|undefined{
    return array.find((arValue) => value === arValue)
}

interface Pair<K, V> {
    key: K;
    value: V;
}

let numberStringPair: Pair<number, string> = {key: 1, value: "test"}

class Storage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItem(index: number): T {
        return this.data[index];
    }
}

let stringStorage = new Storage<string>();
stringStorage.addItem("Hello");
console.log(stringStorage.getItem(0));  // Output: "Hello"

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let obj = { a: 5, b: "Hello" };
console.log(getProperty(obj, "a"));  // Output: 5