const country = {
    name: "Korea",
    population: "5,178,579",
    get_name: function() {
        return this.name;
    }
};

console.log(country.get_name());
console.log(country.name); // .name .population으로 바로 쓸 수 있음
console.log(country.population);