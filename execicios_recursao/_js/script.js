function entrada(){
   //entrada de dados
   num = Number(prompt("Digite o valor que deseja inserir"))
}

function fatorial(num){
   if (num < 0){
      return -1;
   } 
   else if (num == 0){
      return 1;
   }
   var tmp = num;
   
   while (num-- > 2) {
      tmp *= num;
   }
   return tmp;
}
   var result = fatorial(6);
   console.log(result);
   window.alert("O fatorial é " + result)

function fatorial(num) {
   if (num < 0) {
      return -1;
   }
   else if (num == 0) {
      return 1;
   }
   else {
      return (num * fatorial(num - 1));
   }
}
var result = fatorial(5);
console.log(result);
window.alert("O fatorial de é " + result)


