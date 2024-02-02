// const myAsyncFunction = async() => {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
// }

const myAsyncFunction = async() => {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}