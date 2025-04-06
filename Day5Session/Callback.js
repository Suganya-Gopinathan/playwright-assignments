let browser = "Chrome";

function checkBrowserVersion(callback) {

    setTimeout(() => {
        console.log("-----Calling the callback function-----");

        callback(browser);
    }, 2000);

}

function browserVersion(version) {
    console.log(`Browser version using ${version}`);

}

checkBrowserVersion(browserVersion);