var arr = [];
function entrada(){
   //entrada de dados
   var i = 0;
   //entrada de dados
   do{
      arr.push(Number(prompt("Digite qualquer número ou 0 para encerrar: ")));
      i++;
   }while(arr[i-1] != 0); //implementa a condição de parada
   
}

function ordena(){

   var arr = [25,57,48,37,12,92,86,33];
   var aux = 0;
   var count = 0;
   for (var i = 1; i < arr.length; i++){
      aux = arr[i];
      for (var j = i-1; j >= 0; j--) {
         if (arr[j]>aux){
            arr[j+1] = arr[j];
            count++;
         }
      }
      arr[i-count] = aux;
      count = 0;
      console.log(arr);
   }
   document.getElementById("resp").innerHTML = arr;
}
   
