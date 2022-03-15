const loadcountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = countries => {
    const allCountries = countries.map(country => displayCountry(country))
    document.getElementById("country").innerHTML = allCountries.join(" ")

}


const displayCountry = country => {
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}

loadcountries()