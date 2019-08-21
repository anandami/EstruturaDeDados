var vet = [];
function entrada(){
   //entrada de dados
   var i = 0;
   //entrada de dados
   do{
      vet.push(Number(prompt("Digite qualquer número ou 0 para encerrar: ")));
      i++;
   }while(vet[i-1] != 0); //implementa a condição de parada
   
}

function ordena(){
   vet = [25,57,48,37,12,92,86,33];
   for (var i = vet.length; i = 0; i--){
      if(vet[i]<vet[i-1]){
         aux = vet[i];
         vet[i] = vet[i-1];
         vet[i-1] = aux;
      }
      console.log(vet);
   }
   
   document.getElementById("resp").innerHTML = vet;
}