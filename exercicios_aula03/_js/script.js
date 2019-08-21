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
   //vet = [90,10,20,50,40,70,60,30,100,80];
   var aux = 0;
   var pos = 0;
   for (var j = 0; j < vet.length -1; j++){
      var menor = vet[j];
      pos = j;
      for (var i = j+1; i < vet.length; i++){
         if (vet[i]<menor){
            menor = vet[i];
            pos = i;
         }
      }
      aux = vet[j];
      vet[j] = vet[pos];
      vet[pos] = aux;
      console.log(vet);
   }
   
   document.getElementById("resp").innerHTML = vet;
}