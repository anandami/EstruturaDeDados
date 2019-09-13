var vet = [];
function entrada(){
   //entrada de dados
   var i = 0;
   //entrada de dados
   do{
      vet.push(Number(prompt("Digite qualquer número ou 0 para encerrar: ")));
      i++;
   }while(vet[i-1] != 0); //implementa a condição de parada
   console.log(vet);
}

function ordena(){
   for (var j = 0; j < vet.length-1; j++)
   for (var i = 0; i < vet.length-j-1; i++){
      if (vet[i]>vet[i+1]){
         aux = vet[i];
         vet[i] = vet[i+1];
         vet[i+1] = aux;
      }
   }
   document.getElementById("resp").innerHTML = vet;
}