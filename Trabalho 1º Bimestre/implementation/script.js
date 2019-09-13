//Gera array de numeros aleatórios//
function aleatorio(num){

    var arr = [];

    for(let i=0; i<num; i++){
    
        arr[i] = Math.floor(Math.random()*num+1);
    }

    return arr;
}

//Retorna o tempo de execução//
function Time_Metodo(metodo,arr,id){
    
    var antes = 0, depois = 0;
    
    switch(metodo){
        case 0:
            antes = performance.now();
            bubble(arr);
            depois = performance.now();
        break;
        case 1:
            antes = performance.now();
            selecao_direta(arr);
            depois = performance.now();
        break;
        case 2:
            antes = performance.now();
            insercao_direta(arr);
            depois = performance.now();
        case 3:
            antes = performance.now();
            quickSort(arr);
            depois = performance.now();
        break;
    }

    document.getElementById(id).innerHTML = depois-antes;
}

//BubbleSort 0//
function bubble(arr){

    //Ordenação utilizando o método Bubblesort//
    for(let i=0; i<arr.length-1; i++ ){
    
        for(let j=0; j<arr.length-j-1; j++){
    
            if(arr[i]<arr[j]){
    
                aux = arr[i];
    
                arr[i] = arr[j];
    
                arr[j] = aux;
            }
        }
    }
}

//Seleção direta 1//
function selecao_direta(arr){
    
    var aux = 0, pos = 0;
    
    for(var i=0; i < arr.length-1; i++){
    
        pos = i;
    
        for(var j=i+1 ; j < arr.length; j++){
    
            if(arr[pos] > arr[j]){
    
                pos = j;
            }
        }
    
        aux = arr[pos];
    
        arr[pos] = arr[i];
    
        arr[i] = aux;   
    }
}

//Inserção direta 2//
function insercao_direta(arr){
    
    var menor = 0, cont = 0;
    
    for(var i=1; i<arr.length; i++){
    
        menor = arr[i];
    
        for(var j=i-1; j>=0; j--){            
    
            if(arr[j]>menor){
    
                arr[j+1] = arr[j];  
    
                cont++;
            }    
        }   
    
        arr[i-cont] = menor;
    
        cont = 0;
    }
}

//QuickSort 3//
function quickSort(arr,left,right){
    var i = left;
    var j = right;
    var tmp = 0;
    var pivoId = ( left + right ) / 2;
    var pivo = parseInt(arr[pivoId.toFixed()]);
    
    //Particionando
    while(i <= j){
        
        while( parseInt(arr[i]) < pivo ){
        
            i++;
        }

        while( parseInt(arr[j]) > pivo ){
        
            j--;
        }

        if( i <=j ){
        
            tmp = arr[i];
        
            arr[i] = arr[j];
        
            arr[j] = tmp;
        
            i++;
        
            j--;
        }
    }

    //Recursão
    if( left < j ){
        
        quickSort(arr, left, j);
    }
    
    if( i < right ){
        
        quickSort(arr, i, right);
    }
}

//Criando a tabela demonstrativa//
function create(){
    var body = document.getElementById('tb-teste');

    for(var i=0; i<1; i++){

        //BubbleSort//
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(0,aleatorio(100),'+(i+1)+');" type="button">Start</button></td> <td> BubbleSort </td> <td> 10 </td> <td id="'+(i+1)+'"></td>'; 
        body.innerHTML += '</tr>';
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(0,aleatorio(1000),'+(i+2)+');" type="button">Start</button></td> <td> BubbleSort </td> <td> 1.000 </td> <td id="'+(i+2)+'"></td>'; 
        body.innerHTML += '</tr>';
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(0,aleatorio(10000),'+(i+3)+');" type="button">Start</button></td> <td> BubbleSort </td> <td> 10.000 </td> <td id="'+(i+3)+'"></td>'; 
        body.innerHTML += '</tr>';
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(0,aleatorio(100000),'+(i+4)+');" type="button">Start</button></td> <td> BubbleSort </td> <td> 100.000 </td> <td id="'+(i+4)+'"></td>'; 
        body.innerHTML += '</tr>';  
        
        //Seleção direta//
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(1,aleatorio(100),'+(i+5)+');" type="button">Start</button></td> <td> Seleção direta </td> <td> 10 </td> <td id="'+(i+5)+'"></td>'; 
        body.innerHTML += '</tr>';
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(1,aleatorio(1000),'+(i+6)+');" type="button">Start</button></td> <td> Seleção direta </td> <td> 1.000 </td> <td id="'+(i+6)+'"></td>'; 
        body.innerHTML += '</tr>';
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(1,aleatorio(10000),'+(i+7)+');" type="button">Start</button></td> <td> Seleção direta </td> <td> 10.000 </td> <td id="'+(i+7)+'"></td>'; 
        body.innerHTML += '</tr>';
        body.innerHTML += '<tr>';
        body.innerHTML += '<td><button onclick="Time_Metodo(1,aleatorio(100000),'+(i+8)+');" type="button">Start</button></td> <td> Seleção direta </td> <td> 100.000 </td> <td id="'+(i+8)+'"></td>'; 
        body.innerHTML += '</tr>';   

         //Inserção direta//
         body.innerHTML += '<tr>';
         body.innerHTML += '<td><button onclick="Time_Metodo(2,aleatorio(100),'+(i+9)+');" type="button">Start</button></td> <td> Inserção direta </td> <td> 10 </td> <td id="'+(i+9)+'"></td>'; 
         body.innerHTML += '</tr>';
         body.innerHTML += '<tr>';
         body.innerHTML += '<td><button onclick="Time_Metodo(2,aleatorio(1000),'+(i+10)+');" type="button">Start</button></td> <td> Inserção direta </td> <td> 1.000 </td> <td id="'+(i+10)+'"></td>'; 
         body.innerHTML += '</tr>';
         body.innerHTML += '<tr>';
         body.innerHTML += '<td><button onclick="Time_Metodo(2,aleatorio(10000),'+(i+11)+');" type="button">Start</button></td> <td> Inserção direta </td> <td> 10.000 </td> <td id="'+(i+11)+'"></td>'; 
         body.innerHTML += '</tr>';
         body.innerHTML += '<tr>';
         body.innerHTML += '<td><button onclick="Time_Metodo(2,aleatorio(100000),'+(i+12)+');" type="button">Start</button></td> <td> Inserção direta </td> <td> 100.000 </td> <td id="'+(i+12)+'"></td>'; 
         body.innerHTML += '</tr>';  

          //Quick Sort//
          body.innerHTML += '<tr>';
          body.innerHTML += '<td><button onclick="Time_Metodo(3,aleatorio(100),'+(i+13)+');" type="button">Start</button></td> <td> QuickSort </td> <td> 10 </td> <td id="'+(i+13)+'"></td>'; 
          body.innerHTML += '</tr>';
          body.innerHTML += '<tr>';
          body.innerHTML += '<td><button onclick="Time_Metodo(3,aleatorio(1000),'+(i+14)+');" type="button">Start</button></td> <td> QuickSort </td> <td> 1.000 </td> <td id="'+(i+14)+'"></td>'; 
          body.innerHTML += '</tr>';
          body.innerHTML += '<tr>';
          body.innerHTML += '<td><button onclick="Time_Metodo(3,aleatorio(10000),'+(i+15)+');" type="button">Start</button></td> <td> QuickSort </td> <td> 10.000 </td> <td id="'+(i+15)+'"></td>'; 
          body.innerHTML += '</tr>';
          body.innerHTML += '<tr>';
          body.innerHTML += '<td><button onclick="Time_Metodo(3,aleatorio(100000),'+(i+16)+');" type="button">Start</button></td> <td> QuickSort </td> <td> 100.000 </td> <td id="'+(i+16)+'"></td>'; 
          body.innerHTML += '</tr>'; 
    }
}

create();