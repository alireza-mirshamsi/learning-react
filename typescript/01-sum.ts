function sum(a:number, b:number) : number{
    return a+b;
}
sum(1,1) // no errors
// sum("1", 1) //Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// sum(true, 1) //Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
// sum(true, "1") //Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345) Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)