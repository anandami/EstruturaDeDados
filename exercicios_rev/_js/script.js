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

function mediaPar(){
   //calcula a média dos pares
   var par = 0;
   var somaPar = 0;
   for(var i = 0; i < vet.length; i++){
      if (vet[i]%2==0){
         par++;
         somaPar = vet[i] + somaPar;
      }
   }
   par = par - 1; //removendo o zero  
   document.getElementById("pares").innerHTML = par;
   document.getElementById("somaPares").innerHTML = somaPar;
   
}
//função para somar dois elementos a partir de dois índices escolhidos pelo usuário
function somaIndice(){
   var id1 = 0;
   var id2 = 0;
   var somaIndices = 0;
   //escolhe os índices
   id1 = Number(prompt("Digite o primeiro índice"));
   id2 = Number(prompt("Digite o segundo índice"));
   //seleciona os índices
   for (var i = 0; i < vet.length; i ++){
      if (id1 || id2 == i){
         //soma dos elementos dos índices
         somaIndices = somaIndices + vet[i];
      }
   }
   document.getElementById("somaIndices").innerHTML = somaIndices;
}

//função para calcular a moda
function calcModa(){
   var repete = [];
   var cont = 0;
   for (var i = 0; i < vet.length-1; i++){
      for (var j = 0; j < vet.length-1; j++){
         if (vet[i]==vet[j] && i != j){
            cont++;
            repete.push(vet[i]);            
         }
         else{
            alert("Os números inseridos não têm repetição")
         }   
      }
   }
   for (var i = 0; i < vet.length-1; i++){
      
   document.getElementById("resModa").innerHTML = repete;
}

//remover um elemento dado um valor
function rmElemento(){
   var elemento = Number(prompt("Digite o elemento que deseja remover: "));
   var indice = vet.indexOf(elemento);
   if (indice != -1){
      vet.splice(indice,1);
      window.alert("O valor escolhido foi removido");
      window.alert("Vetor atual: " + vet);
   }else{
      window.alert("O valor digitado não existe e não pode ser removido.");
   }

}

//remover a partir de um índice
function rmIndice(){
   var indice = Number(prompt("Digite o índice que deseja remover o elemento: "));
   vet.splice(indice,1);
   window.alert("O valor escolhido foi removido");
   window.alert("Vetor atual: " + vet);
   
}
