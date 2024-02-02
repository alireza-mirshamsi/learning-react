const myPromise = new Promise((resolve, reject) => {
    // if promise resolve success:
    resolve('Success!');
    // if promise resolve reject: 
    // reject('Error!');
});

myPromise
    .then((result) => {
        console.log('Successful:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

//استفاده از then و catch با Promise🔗
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

//زنجیره سازی در Promises
firstAsyncFunction()
    .then((result) => {
        // Code after the first success
        return secondAsyncFunction(result);
    })
    .then((result) => {
        // Code after the second success
    })
    .catch((error) => {
        // Code after any failure in the chain
    });