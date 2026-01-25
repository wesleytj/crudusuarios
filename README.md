# CRUD de Usuários - Spring Boot + H2

Projeto simples de API REST desenvolvido com Spring Boot, utilizando banco de dados em memória H2 para operações de cadastro, listagem e persistência de usuários.

---

## 🚀 Tecnologias utilizadas

- Java 17  
- Spring Boot  
- Spring Data JPA  
- H2 Database  
- Maven  
- VS Code  
- Thunder Client  

---

## 📂 Estrutura do projeto

com.wesley.crudusuarios
 ┣ controller
 ┃ ┗ UsuarioController.java
 ┣ service
 ┃ ┗ UsuarioService.java
 ┣ repository
 ┃ ┗ UsuarioRepository.java
 ┣ model
 ┃ ┗ Usuario.java
 ┗ WesleyApplication.java

---

## 📌 Funcionalidades

- Criar usuário (POST)  
- Listar usuários (GET)  
- ID automático  
- Persistência em banco H2  

---

## 🔗 Endpoints

### ➤ Listar usuários

GET
```http://localhost:8080/usuarios```

### ➤ Criar usuários

POST
```http://localhost:8080/usuarios```

Body

```json
{
  "nome": "Wesley",
  "email": "wesley@email.com",
  "idade": 32
}
```

---

## 🧠 Conceitos aplicados

- API REST

- Arquitetura em camadas (Controller, Service, Repository, Model)

- Injeção de dependência

- JPA / ORM

- Banco de dados em memória

---

## ▶ Como executar o projeto

```
git clone https://github.com/wesleytj/crudusuarios.git
cd crudusuarios
run `CrudusuariosApplication.java`
`http://localhost:8080/usuarios`
```

---

## 📎 Observação

O banco H2 é em memória, portanto os dados são apagados ao reiniciar a aplicação.

---

## 📌 Autor

Desenvolvido por **Wesley Treib Jacques**

* 💼 [LinkedIn](https://www.linkedin.com/in/wesley-jacques/)
* 🧑‍💻 [GitHub](https://github.com/wesleytj)
