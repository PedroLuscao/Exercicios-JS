function clicar(){   
    let num = Number(window.prompt("Digite seu número: "));
    let e = document.getElementById("textos");

    if (num % 2 == 0){
        e.innerText = `O número ${num} é par!`;
    } else {
        e.innerHTML = `O número ${num} é ímpar!`;
    }
}

