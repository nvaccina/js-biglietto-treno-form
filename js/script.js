const bottoneGen = document.getElementById('genera');
const prezzoBiglietto = "0.21";
let bigliettoIntero = (km * prezzoBiglietto);

bottoneGen.addEventListener('click', function(){
  const input = document.getElementById('name');
  const output = document.getElementById('output');
  const name = input.value;
  output.innerHTML = name;
  input.value = "";
  
  const fasciaAge = document.getElementById('age');
  const age = fasciaAge.value;
  fasciaAge.value = "";
  
  if (fasciaAge === minorenne){
    bigliettoScontato = (costoBiglietto - (costoBiglietto * 20 / 100));
  } else if (fasciaAge === over65){
    bigliettoScontato = (costoBiglietto - (costoBiglietto * 40 / 100));
  }else{
    bigliettoIntero;
  }
  
})

/*const message = `
&euro; ${bigliettoIntero.toFixed(2)}`*/

document.getElementById("prezzo").innerHTML = bigliettoScontato || bigliettoIntero;
