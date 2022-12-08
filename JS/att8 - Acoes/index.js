function addText(num){
    let div = document.getElementById("textos");
    let p = document.createElement("p");
    p.innerHTML = "Clicou na ação " + num;
    div.append(p);
}