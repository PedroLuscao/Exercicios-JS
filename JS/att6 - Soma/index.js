function clicar(){
    let num1 = Number(window.prompt("Digite o primeiro número: "));  
    let num2 = Number(window.prompt("Digite o segundo número: "));  

    let soma = num1 + num2;
    
    let e = document.getElementById("texto");
    e.innerText = `A soma de ${num1} e ${num2} é ${soma}`;
}