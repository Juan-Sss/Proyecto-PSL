function apretar(){
    const valor = document.getElementById("numero").value;
    console.log(valor);
    const p = document.getElementById("mensaje");
    if (valor >0 && valor<10){
        
        p.innerHTML = "numero recibido";
    }else{
        p.innerHTML = "numero incorrecto";
    }
}

const btn = document.getElementById("btn");

btn.onclick = apretar; 