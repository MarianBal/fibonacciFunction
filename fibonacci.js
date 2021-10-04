const fibonacci = number =>{

  let init = 0;
  let add = 1;
  let result;
  
  for (let i=0; number>= i; i++){
    if(i ===0) result= init && console.log('0');
    if(i ===1) result = add && console.log('1');
    if(i > 1){
      result = init + add;
      init = add;
      add = result;}  
    }
  return result
}

//console.log(fibonacci(7));