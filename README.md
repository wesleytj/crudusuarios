# CRUD de Usuários - Spring Boot + H2
`Versão: 1.1.0`

Projeto de API REST desenvolvido com Spring Boot, utilizando banco de dados em memória H2 para operações completas de CRUD (Create, Read, Update, Delete) de usuários.

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
```
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
```
---

## 📌 Funcionalidades

- Criar usuário (POST)  
- Listar usuários (GET)  
- Atualizar usuário (PUT)  
- Deletar usuário (DELETE)  
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
### ➤ Atualizar usuários

PUT

```http://localhost:8080/usuarios/{id}```

Body

```json
{
  "nome": "Wesley Atualizado",
  "email": "wesley@atualizado.com",
  "idade": 33
}
```
### ➤ Deletar usuários

DELETE

```http://localhost:8080/usuarios/{id}```

---

## 🧠 Conceitos aplicados

- API REST

- Arquitetura em camadas (Controller, Service, Repository, Model)

- Injeção de dependência

- JPA / ORM

- Banco de dados em memória

- Versionamento semântico

---

## ▶ Como executar o projeto

```
git clone https://github.com/wesleytj/crudusuarios.git
cd crudusuarios
```
#### Executar:
`CrudusuariosApplication.java`

#### Acessar:
`http://localhost:8080/usuarios`

---

## 📎 Observação

O banco H2 é em memória, portanto os dados são apagados ao reiniciar a aplicação.

---

## 📌 Autor

Desenvolvido por **Wesley Treib Jacques**

* 💼 [LinkedIn](https://www.linkedin.com/in/wesley-jacques/)
* 🧑‍💻 [GitHub](https://github.com/wesleytj)
