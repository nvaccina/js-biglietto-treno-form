
const bottoneGen = document.getElementById('genera');
const bottoneDelete = document.getElementById('annulla');
const prezzoBiglietto = 0.21;
const piccoloSconto = 20;
const grandeSconto = 40;


bottoneGen.addEventListener('click', function(){

  const input = document.getElementById('name');
  const output = document.getElementById('output');
  const name = input.value;
  output.innerHTML = name;
  input.value = "";
  
  let km = document.getElementById('km').value;
  let costoBiglietto = (km * prezzoBiglietto);

  const fasciaAge = document.getElementById('age').value;


  if (fasciaAge == "minorenne"){
    costoBiglietto *= (1 - piccoloSconto / 100);
    document.getElementById("offerta").innerHTML = "Biglietto Silver";
  } else if (fasciaAge == "over"){
    costoBiglietto *= (1 - grandeSconto / 100);
    document.getElementById("offerta").innerHTML = "Biglietto Gold";
  }else{
    document.getElementById("offerta").innerHTML = "Biglietto Standard";
  }

  const message = `
  ${costoBiglietto.toFixed(2)}&euro;
  `
  document.getElementById("prezzo").innerHTML = message;


  const biglietto = document.getElementById('biglietto');
  if(biglietto.classList.contains('hide')){
    biglietto.classList.remove('hide');
  }

  document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 11) + 1;
  document.getElementById("codice").innerHTML = Math.floor(Math.random() * 1001) + 1;
})

bottoneDelete.addEventListener('click', function(){

  if(biglietto.classList.contains('hide')){
    biglietto.classList.remove('hide');
  }
  else{
    biglietto.classList.add('hide');
  }
})
