// interface Duck {
//     color? : string;
//     age? : number;
//     quack: () => void;
//     walk: () => void;
// }

// const foo = (duck:Duck) => {...}

// foo({
//     quack: () => console.log("quacking like a duck"),
//     walk: () => console.log("walking like a duck")
//     })

interface Animal {
    name: string;
    age: number;
    eat: () => void;
    sleep: () => void;
}

interface Duck extends Animal{
    swim: () => void;
}

interface Car {
    make: string;
    model: string;
    year?: number; // خصوصیت اختیاری
}

interface Printer {
    print: () => void;
    scan?: () => void; // این تابع اختیاری است
}

class BasicPrinter implements Printer {
    print() {
        console.log("Printing document");
    }
}