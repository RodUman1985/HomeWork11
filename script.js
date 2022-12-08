async function loadCurrecies(){
    const res= await fetch('https://date.nager.at/api/v3/AvailableCountries');
    console.log (res);
     let currensies= await res.json();
     
     drawCurrencies(currensies);
     
}
loadCurrecies();
function drawCurrencies(currensies){
    const select = document.getElementById('currencies');
    currensies.forEach((c) => {
        const option = document.createElement('option');
        option.innerText=c.Name;
        option.value=c.countryCode;
        select.appendChild(option)
    });

}

