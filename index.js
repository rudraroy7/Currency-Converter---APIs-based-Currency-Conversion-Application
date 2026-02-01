const currencyFirstE1 = document.getElementById("currency-first");

const worthFirstE1 = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-second");

const worthSecondE1 = document.getElementById("worth-second")

const exchangeRateE1 = document.getElementById("exchange-rate")

updateRate()

function updateRate(){
fetch(`https://v6.exchangerate-api.com/v6/b6b6c72c8f6f63e2504b681d/latest/${currencyFirstE1.value}`).then((res)=>res.json()).then((data)=>{
  const rate = data.conversion_rates[currencySecondEl.value];
  console.log(rate);
  exchangeRateE1.innerText = `1 ${currencyFirstE1.value} = ${rate + " " + currencySecondEl.value}`;

  worthSecondE1.value = (worthFirstE1.value * rate).toFixed(2)
});
}
  

currencyFirstE1.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstE1.addEventListener("input",updateRate)
