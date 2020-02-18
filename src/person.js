//Using the XHR with callback
// const makeRequest = (callback, code) => {
//     const xhr = new XMLHttpRequest();


//     xhr.addEventListener('readystatechange', e => {

//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const result = JSON.parse(e.target.responseText);
//             const data = result.find(ele => {
//                 return ele.alpha2Code === code;
//             })
//             if (data === undefined) {
//                 throw Error('Your Data is not correct')
//             } else {
//                 callback(undefined, data.name)
//             }
//         } else if (e.target.readystate === 4) {
//             callback('Data cant be fetched')
//         }
//     })
//     xhr.open('GET', 'http://restcountries.eu/rest/v2/all');


//     xhr.send();


// }

// makeRequest((error, data) => {
//     if (error) {
//         console.log(error.message)
//     } else {
//         console.log(data)
//     }
// }, 'UK');

//Using XHR with Promises
const makeRequest = (code) => {
    const result = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();


        xhr.addEventListener('readystatechange', e => {

            if (e.target.readyState === 4 && e.target.status === 200) {
                const result = JSON.parse(e.target.responseText);
                const data = result.find(ele => {
                    return ele.alpha2Code === code;
                })
                if (data === undefined) {
                    throw new Error(`Error : Your Data is not correct`)
                } else {
                    resolve(data.name)
                }
            } else if (e.target.readyState == 4) {
                reject(`'Data cant be fetched'`)
            }
        })
        xhr.open('GET', 'http://restcountries.eu/rest/v2/all');


        xhr.send();
    })

    return result;

}

// makeRequest('UK').then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(`Error: ${err}`)
//     document.querySelector('.status').textContent = `Error: ${err.message}`
// })