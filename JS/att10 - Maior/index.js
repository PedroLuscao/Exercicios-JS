function clicar(){   
    let num1 = Number(window.prompt("Digite o primeiro número: "));
    let num2 = Number(window.prompt("Digite o segundo número: "));
    let e = document.getElementById("texto");
    
    if (num1 == num2){
        e.innerHTML = "Os números são iguais";
    }
    
    if (num1 > num2){
        e.innerHTML = `O número ${num1} é maior que ${num2}`;
    }
    
    if (num1 < num2){
        e.innerHTML = `O número ${num1} é menor que ${num2}`;
    }
}

