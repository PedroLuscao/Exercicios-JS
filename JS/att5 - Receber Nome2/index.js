function clicar(){
    let nome = window.prompt("Digite seu nome: ");  
    let e = document.getElementById("texto");
    e.innerText = `Olá ${nome}! É um prazer te conhecer.`;
}