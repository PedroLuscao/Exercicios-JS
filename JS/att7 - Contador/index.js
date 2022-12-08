var cont=0;

function add(){
    cont++;
    let e = document.getElementById("texto");
    e.innerText = `O contador está com ${cont} clicks.`
}

function zerar(){
    cont = 0;
    let e = document.getElementById("texto");
    e.innerText = `O contador está com ${cont} clicks.`
}