let timerId=setInterval(()=>console.log("tick"),2000);

setTimeout(()=>{clearInterval(timerId);console.warn("STOP");},7000);


//// nested timer

let timerID=setTimeout(function tick(){
    console.log("tack");
    timerID=setTimeout(tick,3000);
},2000);

setTimeout(()=>{clearTimeout(timerID);console.warn("STOP");},10000);


/// diferencia entre setTimeout anidado y setInterval



function func(x){console.log(x)}

/// esta ejecutara cada funcion cada 100ms 
let i=1;
setInterval(function(){
    func(i++);
},100);

///esta ejecutara cada funcion 100ms despues de ejecutada la anterior
let j=1;

setTimeout(function run(){
    func(i++);
    setTimeout(run,100);
},100);

