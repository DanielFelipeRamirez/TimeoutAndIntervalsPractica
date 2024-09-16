
function exeTimeout(){
    let delay=$("#delayTimeout").val();
    if (!delay){        
        $("#delayTimeout").addClass("border-danger");
        alert("pon algo en set timeout");
    }
    else{

        let delayMs=Number(delay)
        if (delayMs){
            $("#cantSegundos1").val(delay)
            $("#delayTimeout").removeClass("border-danger"); 
            setTimeout(function(){
                $("#newAns").val("tiempo cumplido")
            },delayMs)
        }
        else{
            $("#delayTimeout").addClass("border-danger");
            alert("el valor debe ser numerico");
        }
    }

    console.log();
}


let stop=false;
var customInterval;
function exeInterval(){
    let delay=$("#delayInterval").val();
    stop=false;
    if (!delay){        
        $("#delayInterval").addClass("border-danger");
        alert("pon algo en set Interval");
    }
    else{

        let delayMs=Number(delay)
        if (delayMs){
            $("#cantSegundos2").val(delay)
            $("#delayInterval").removeClass("border-danger"); 
            let acum=0;
            customInterval=setInterval(function(){
                acum++;
                $("#newResp").val(acum);
                if(stop){
                       clearInterval(customInterval);
                }
            },delayMs)
        }
        else{
            $("#delayInterval").addClass("border-danger");
            alert("el valor debe ser numerico");
        }
    }

}

function stopInterval(){
stop=true;
}

