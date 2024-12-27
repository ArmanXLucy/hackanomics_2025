// Exchange rates (for demonstration purposes)
const exchangeRates = {
    "Rupee": { "Dollar": 0.012, "Euro": 0.011, "Rubbel": 0.9, "Pounds": 0.009 },
    "Dollar": { "Rupee": 83.33, "Euro": 0.85, "Rubbel": 74.5, "Pounds": 0.75 },
    "Euro": { "Rupee": 90.91, "Dollar": 1.18, "Rubbel": 87.5, "Pounds": 0.88 },
    "Rubbel": { "Rupee": 1.11, "Dollar": 0.013, "Euro": 0.011, "Pounds": 0.012 },
    "Pounds": { "Rupee": 111.11, "Dollar": 1.33, "Euro": 1.14, "Rubbel": 83.33 }
};

document.querySelector(".convert_button").addEventListener('click',()=>{
    const fisrt_select=document.getElementById('from_currency').value;
    const second_select=document.getElementById('to_currency').value;
    const input=parseFloat(document.getElementById('amount_input').value);
    if(isNaN(input)){
        document.querySelector('.result').innerText="Enter a valid amount"
        return;
    }


    if(fisrt_select===second_select){
        document.querySelector('.result').innerText="you cant convert same currency"
        return;
    }

    const rate=exchangeRates[fisrt_select][second_select];
    const result=rate*input;

    document.querySelector('.result').innerText=`${input} ${fisrt_select} = ${result.toFixed(2)} ${second_select}`
});

document.querySelector('.reset').addEventListener('click',()=>{
    document.getElementById('from_currency').value='Rupee'
    document.getElementById('to_currency').value='Rupee'
    document.getElementById('amount_input').value=''
    document.querySelector('.result').innerHTML=''
})