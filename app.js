let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Debe ingresar un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Error: Ese nombre ya está ingresado.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se debe agregar al menos 2 jugador.");
        return;
    }
    let seleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(`Tu amigo secreto es: ${seleccionado}`);
}

function mostrarResultado(texto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = texto;
    resultado.appendChild(li);
}

function reiniciarSorteo() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = ""; 
}
