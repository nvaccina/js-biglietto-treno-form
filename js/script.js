
const bottoneGen = document.getElementById('genera');
const prezzoBiglietto = 0.21;
const piccoloSconto = 20;
const grandeSconto = 40;


bottoneGen.addEventListener('click', function(){
  /*name*/
  const input = document.getElementById('name');
  const output = document.getElementById('output');
  const name = input.value;
  output.innerHTML = name;
  input.value = "";
  
  let km = document.getElementById('km').value;
  let costoBiglietto = (km * prezzoBiglietto);

  const fasciaAge = document.getElementById('age').value;
  console.log("prima",costoBiglietto);

  if (fasciaAge == "minorenne"){
    costoBiglietto *= (1 - piccoloSconto / 100);
  } else if (fasciaAge == "over"){
    costoBiglietto *= (1 - grandeSconto / 100);
  }
  console.log("dopo",costoBiglietto);

  const message = `
  ${costoBiglietto.toFixed(2)}&euro;
  `
  document.getElementById("prezzo").innerHTML = message;

})
