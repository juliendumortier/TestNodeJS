const displayCountries = countries => {
    console.log('[');
    countries.forEach((country, countryIx) => {
        console.log("  {");
        console.log(`    name: '${country.name}',`);
        console.log(`    people: [`);
        country.people.forEach((person, personIx) => {
            console.log("      {");
            console.log(`        name: '${person.name}',`);
            console.log(`        animals: [`);
            person.animals.forEach((animal, animalIx) => {
                console.log("          {");
                console.log(`            name: '${animal.name}'`);
                console.log(animalIx == person.animals.length - 1 ? "          }" : "          },");
            });
            console.log(`        ]`);
            console.log(personIx == country.people.length - 1 ? "      }" : "      },");
        });
        console.log(`    ]`);
        console.log(countryIx == countries.length - 1 ? "  }" : "  },");
    });
    console.log("]");
};

const filterCountries = (countries, filterString) => {
    const filteredData = countries.filter(country => {
        const filteredPeople = country.people.filter(person => {
            const filteredAnimals = person.animals.filter(animal => animal.name.toLowerCase().includes(filterString.toLowerCase()));
            return filteredAnimals.length > 0;
        });
        country.people = filteredPeople;
        return filteredPeople.length > 0;
    });
    return filteredData;
};

const countPeopleAnimals = countries => {
    const countriesWithCount = countries.map(country => {
        country.people = country.people.map(person => {
            person.name = `${person.name} [${person.animals.length}]`;
            return person;
        });
        country.name = `${country.name} [${country.people.length}]`;
        return country;
    });
    return countriesWithCount;
};

module.exports = {
    displayCountries,
    filterCountries,
    countPeopleAnimals,
};