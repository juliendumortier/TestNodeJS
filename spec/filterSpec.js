const {filterCountries} = require("../functions.js");
const { data: countries } = require("./data/filterData.js");
const { data: countriesFiltered } = require("./data/dataFilteredRy.js");

describe("Filter animals", () => {
    it ("Should filter animals using animal name search term", () => {
        expect(filterCountries(countries, "ry")).toEqual(countriesFiltered);
    });
});