const num =(n) =>{
    let sum=0;
    for (let i = 1; i <= n; i++) {
       sum = i+sum;
       console.log(`i=${i} sum=${sum}`);    
        
    }
    return sum;
}

num(5);