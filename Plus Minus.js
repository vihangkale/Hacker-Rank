function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for(let i = 0; i < n; i++) {
        if(arr[i] > 0) {
            pos++;
        }
        
        else if(arr[i] < 0) {
            neg++;
        }
        else if(arr[i]== 0){
            zero++;
        }
         
    }
    pos/=n;
    neg/=n;
    zero/=n; 
     
     console.log(pos);
      console.log(neg);
       console.log(zero);
    
}
