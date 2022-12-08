function clicar(){   
    event.preventDefault();
    let num = Number(document.getElementById("num").value);

    let div = document.getElementById("lista");
    div.innerHTML = "";
    for (let i=1; i<=10; i++) {
        let p = document.createElement("p");
        p.innerHTML = `${i} x ${num} = ${i*num}`;
        div.append(p);
        // alert(p.innerHTML);
    }
}

