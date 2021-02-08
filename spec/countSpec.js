const { countPeopleAnimals } = require("../functions.js");
const { data: countries } = require("./data/countData.js");
const { data: countriesWithCount } = require("./data/dataWithCount.js");

describe("Add animals and people counts", () => {
    it ("Should add people count to country name and animals count to person name", () => {
        expect(countPeopleAnimals(countries)).toEqual(countriesWithCount);
    });
});
