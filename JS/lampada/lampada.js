var estado = "deligada";

function ligar_lampada(){
    let e = document.getElementById("lampada");
    estado = "ligada";
    e.src = "./imagens/on.png"
}

function desligar_lampada(){
    let e = document.getElementById("lampada");
    estado = "desligada";
    e.src = "./imagens/off.png"
}

function interruptor(){
    let e = document.getElementById("lampada");

    if (estado == "desligada"){
        e.src = "./imagens/on.png"
        estado = "ligada";
    } else {
        e.src = "./imagens/off.png"
        estado = "desligada";
    }
}