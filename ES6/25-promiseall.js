// const promises = [promise1, promise2, promise3];

// Promise.all(promises)
//     .then((results) => {
//         // Code after the success of all Promises
//     })
//     .catch((error) => {
//         // Code after failure of any of the Promises
//     });


const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Promise 1 executed'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Promise 2 rejected'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'Promise 3 executed'));

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Executed:', result.value);
            } else if (result.status === 'rejected') {
                console.log('Rejected:', result.reason);
            }
        });
    });