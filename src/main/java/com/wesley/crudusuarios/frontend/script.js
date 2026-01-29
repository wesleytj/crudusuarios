const API_URL = "http://localhost:8080/usuarios";

const form = document.getElementById("formUsuario");
const tabela = document.getElementById("tabelaUsuarios");

const inputId = document.getElementById("idUsuario");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputIdade = document.getElementById("idade");


// =======================
// LISTAR USUÁRIOS
// =======================

async function carregarUsuarios() {
    const response = await fetch(API_URL);
    const usuarios = await response.json();

    tabela.innerHTML = "";

    usuarios.forEach(usuario => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.idade}</td>
            <td>
                <button onclick="editarUsuario(${usuario.id})">✏</button>
                <button onclick="deletarUsuario(${usuario.id})">🗑</button>
            </td>
        `;

        tabela.appendChild(linha);
    });
}


// =======================
// SALVAR / ATUALIZAR
// =======================

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = {
        nome: inputNome.value,
        email: inputEmail.value,
        idade: inputIdade.value
    };

    const id = inputId.value;

    if (id) {
        // UPDATE
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
    } else {
        // CREATE
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
    }

    form.reset();
    inputId.value = "";

    carregarUsuarios();
});


// =======================
// EDITAR
// =======================

async function editarUsuario(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const usuario = await response.json();

    inputId.value = usuario.id;
    inputNome.value = usuario.nome;
    inputEmail.value = usuario.email;
    inputIdade.value = usuario.idade;
}


// =======================
// DELETAR
// =======================

async function deletarUsuario(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    carregarUsuarios();
}


// =======================
// INICIALIZA
// =======================

carregarUsuarios();
