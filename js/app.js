const loadcountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => showCountries(data))
}

const showCountries = countries => {
    console.log(countries[0])
    const allCountries = countries.map(country => displayCountry(country))
    document.getElementById("country").innerHTML = allCountries.join(" ")

}


const displayCountry = ({ name, flags, capital }) => {
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <h4>${capital}</h4>
        <img src="${flags.png}">
    </div>
    `
}

loadcountries()