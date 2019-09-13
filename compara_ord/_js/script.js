var arr = [];
function entrada(){
   //entrada de dados - geração de valores
   var max = Number(prompt("Quantos valores aleatórios inteiros deseja gerar? -- este valor também será o teto"))
   for (var i = 0; i < max; i++){
      arr.push(Math.floor(Math.random() * max))
   }
   window.alert("Valores gerados com sucesso!")

}   
//primeira forma de ordenar 
function bubblesort(){
   var arr_aux1 = arr.slice();//cópia do vetor 
   var before = Date.now(); //inicia a contagem de tempo de execução
   for (var j = 0; j < arr_aux1.length-1; j++){
      for (var i = 0; i < arr_aux1.length-j-1; i++){
         if (arr_aux1[i]>arr_aux1[i+1]){
            aux = arr_aux1[i];
            arr_aux1[i] = arr_aux1[i+1];
            arr_aux1[i+1] = aux;
         }
      }
   }
   var time = Date.now() - before; //finaliza a contagem
   document.getElementById("resp1").innerHTML = arr_aux1;
   window.alert("A função demorou " + time + "ms"); 
}

//segunda forma de ordenar 
function selecao_direta(){
   var arr_aux2 = arr.slice();
   var before = Date.now(); //inicia a contagem de tempo de execução
   var aux = 0;
   var pos = 0;
   for (var j = 0; j < arr_aux2.length -1; j++){
      var menor = arr_aux2[j];
      pos = j;
      for (var i = j+1; i < arr_aux2.length; i++){
         if (arr_aux2[i]<menor){
            menor = arr_aux2[i];
            pos = i;
         }
      }
      aux = arr_aux2[j];
      arr_aux2[j] = arr_aux2[pos];
      arr_aux2[pos] = aux;
   }
   var time = Date.now() - before;
   document.getElementById("resp2").innerHTML = arr_aux2;
   window.alert("A função demorou " + time + "ms"); 
}

//terceira forma de ordenar 
function insercao_direta(){
   
   var arr_aux3 = arr.slice();
   var before = Date.now(); //inicia a contagem de tempo de execução
   var aux = 0;
   var count = 0;
   for (var i = 1; i < arr_aux3.length; i++){
      aux = arr_aux3[i];
      for (var j = i-1; j >= 0; j--) {
         if (arr_aux3[j]>aux){
            arr_aux3[j+1] = arr_aux3[j];
            count++;
         }
      }
      arr_aux3[i-count] = aux;
      count = 0;
   }
   var time = Date.now() - before;
   document.getElementById("resp3").innerHTML = arr_aux3;
   window.alert("A função demorou " + time + "ms"); 
}

   
