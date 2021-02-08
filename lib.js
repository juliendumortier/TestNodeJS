const { data } = require("./data.js");
const {displayCountries, filterCountries, countPeopleAnimals} = require("./functions.js");

module.exports = (args) => {
    args.forEach(arg => {
        const argName = arg.substring(2, arg.indexOf("=") == -1 ? arg.length : arg.indexOf("="));
        switch(argName) {
            case "filter":
                const filterString = arg.substr(arg.indexOf("=") + 1);
                if (arg.indexOf("=") == -1 || filterString.length == 0) {
                    console.log("Please add a value to filter argument.");
                } else {
                    const filteredData = filterCountries(data, filterString);
                    displayCountries(filteredData);
                }
                break;
            case "count":
                const countriesWithCount = countPeopleAnimals(data);
                displayCountries(countriesWithCount);
                break;
            default:
                console.log("Unknown argument.");
                break;
        }
    });
}