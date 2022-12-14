let t=new Date();
    let t2=t.getFullYear();
    console.log(t2);
async function loadCurrecies(){
    const res= await fetch('https://date.nager.at/api/v3/AvailableCountries');
    
     let avCon= await res.json();

     console.log (avCon);
     
     drawCurrencies(avCon);
     
}
loadCurrecies();
function drawCurrencies(avCon){
    const select = document.getElementById('avCon');
    avCon.forEach((c) => {
        const option = document.createElement('option');
        option.innerText=c.name;
        option.value=c.countryCode;
        select.appendChild(option)
    });

}

async function showExRate (countryCode){
    
    const url=`https://date.nager.at/api/v3/PublicHolidays/${t2}/${countryCode}`;
    const res = await fetch(url);
    const rates= await res.json();
    console.log(rates);
    const d= document.getElementById('hollydays');
    d.innerHTML = '';
    rates.forEach(rate => {
        let c1=rate.localName;
        console.log (c1);
        let c2=rate.date;
        console.log (c2);
        ///
        const elem = document.createElement('div');
        elem.innerText=`${rate.date} - ${rate.localName}`;
        d.append(elem);
    });
   
}
