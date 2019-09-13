//QuickSort //
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

function chamar (){
    var arr = [25,57,48,37,12,92,86,33,99,145,1];
    quickSort(arr, 0, arr.length-1);
    console.log(arr);
}



  
  