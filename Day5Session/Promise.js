fetchDataFromDatabase = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = true;
        console.log("Fetching Data from database");

        if (data === true) {
            resolve("Data fetched successfully!");
        }
        else {
            reject("Data not found!");
        }
    }, 3000);
});

fetchDataFromDatabase
    .then(message => {
        console.log("Data fetched successfully!");
    })

    .catch(error => {
        console.log("Data not found!");

    }
    )