function launchBrowser(browserName) {

    if (launchBrowser === "chrome") {
        console.log("The launch browser is " + browserName);
    }
    else {
        console.log("The launch browser is " + browserName);
    }
}

launchBrowser("chrome");

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests")
            break;

        case "sanity":
            console.log("Running Sanity Tests")
            break;

        case "Regression":
            console.log("Running Sanity Tests")
            break;

        default:
            console.log("Running Smoke tests default");
            break;
    }
}

runTests("Functional");