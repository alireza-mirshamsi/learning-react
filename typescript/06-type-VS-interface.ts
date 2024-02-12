interface Printable {
    print(): void;
  }

  class MyClass implements Printable {
    print() {
      console.log("Printing...");
    }
}

// ترکیب (intersection) با type
type A = { a: number };
type B = { b: string };
type C = A & B;

// اجتماع (union) با type
type D = number | string;

// اجتماع (union) با interface نیاز به انتخاب از union در داخل یک فیلد خاص است
interface E {
  value: number | string;
}

// Another File global.d.ts
interface Global {
  appName: string;
}

// Another File
// const appName: string = Global.appName;