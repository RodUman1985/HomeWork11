async function loadCurrecies(){
    const res= await fetch('https://date.nager.at/api/v3/AvailableCountries');
    console.log (res);
     let avCon= await res.json();
     
     drawCurrencies(avCon);
     
}
loadCurrecies();
function drawCurrencies(avCon){
    const select = document.getElementById('avCon');
    avCon.forEach((c) => {
        const option = document.createElement('option');
        option.innerText=c.Name;
        option.value=c.countryCode;
        select.appendChild(option)
    });

}

async function showExRate (id){
    const url=`https://www.nbrb.by/api/exrates/rates/${id}`;
    const res = await fetch(url);
    const rate= await res.json();
    const d= document.getElementById('exrate');
    d.innerText=`${rate.Cur_Scale}${rate.Cur_Name} = ${rate.Cur_OfficialRate} BYN`;
}
async function sendMessage(){
    const username=document.getElementById('username');
    const msg=document.getElementById('msg');
    const req= {
        name:username.value,
        messege: msg.value

    }
    const reqJSON= JSON.stringify(req);
    const url = 'http://192.168.100.101:8080';
   await fetch(url,{
        method:'POST',
        body: reqJSON,
        headers:{
            'Content-Type':'application/json'
        }

    })
    msg.value='';
}