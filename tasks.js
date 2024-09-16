//////1.Output every second

/*Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.*/

//1

function printNumbers1(from,to){
    let acum=from;

    let interval=setInterval(function() {
        console.log(acum);
        acum++; 
        if (acum>to){
        clearInterval(interval);
        console.warn("STOP");
    }},1000);
    
   
}



function printNumbers2(from,to){
    let acum=from;

    let timer=setTimeout(function nested() {
        console.log(acum);
        acum++;
        if (acum>to){
            clearTimeout(timer);
            console.warn("STOP");}
        else{timer=setTimeout(nested,1000);}
        
        

    }, 1000);
    
   
}