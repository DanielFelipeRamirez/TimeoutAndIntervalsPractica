// di hola despues de un segundo

function diHola(){
    console.log("hola");
}

setTimeout(diHola,1000);


// con Args

function saluda(saludo,quien){
    console.log(saludo+", "+quien);
}

setTimeout(saluda,1000,"Hola","Daniel");


//con string (NO RECOMENDADO)

setTimeout("console.log('HOLA')",1000)

// con funcion Lamda

setTimeout(()=>console.log("Bon Jour"),1000)


//////////////CANCELAR CON CLEAR TIMEOUT

let timerId= setTimeout(()=>alert("nunca va a salir"),1000);
console.log(timerId); /// genera un identificador (en este caso un numero) con el cual podemos llamar al timer
clearTimeout(timerId);
console.log(timerId);