// let promise = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(promise)

// const myPromise = new promise((resolve, reject) => {
//     resolve("its ok");
//     reject("its not ok")
// })
// myPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// const myPromise = new promise((resolve, reject) => {
//     resolve("1");
//     resolve("2");
//     reject("its not ok")
// })

// let result = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch();

const returnData = async() => {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(result)
}

returnData()