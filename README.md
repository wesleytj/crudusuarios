# CRUD de Usuários - Spring Boot + H2 + Front-end
`Versão: 1.2.0`

Projeto de API REST com Spring Boot integrado a um front-end simples em HTML, CSS e JavaScript para cadastro e gerenciamento de usuários.

---

## 🚀 Tecnologias utilizadas

### Backend
- Java 17  
- Spring Boot  
- Spring Data JPA  
- H2 Database  
- Maven  
- Jakarta Validation

### Frontend
- HTML5  
- CSS3  
- JavaScript (Fetch API)

### Ferramentas
- VS Code  
- Thunder Client

---

## 📂 Estrutura do projeto
```
com.wesley.crudusuarios
 ┣ controller
 ┃ ┗ UsuarioController.java
 ┣ frontend
 ┃ ┗ index.html
 ┃ ┗ styles.css
 ┃ ┗ script.js
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

### Backend (API REST)

- Criar usuário  
- Listar usuários  
- Buscar usuário por ID  
- Atualizar usuário  
- Excluir usuário  

### Frontend

- Formulário de cadastro  
- Listagem dinâmica  
- Edição de usuários  
- Exclusão de usuários 

---

## 🔗 Endpoints

### ➤ Listar usuários

GET
```http://localhost:8080/usuarios```

### ➤ Buscar por ID
GET  
`http://localhost:8080/usuarios/{id}`

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

- Integração Front-end + Back-end

- CORS

- Validação de dados

- Tratamento de erros HTTP

---

## ▶ Como executar o projeto

```
git clone https://github.com/wesleytj/crudusuarios.git
cd crudusuarios
```
#### Executar:
`CrudusuariosApplication.java`

#### Acessar:
Back-end:
`http://localhost:8080/usuarios`

Front-end:
Abrir `index.html` no navegador
---

## 📎 Observação

O banco H2 é em memória, portanto os dados são apagados ao reiniciar a aplicação.

---

## 📌 Autor

Desenvolvido por **Wesley Treib Jacques**

* 💼 [LinkedIn](https://www.linkedin.com/in/wesley-jacques/)
* 🧑‍💻 [GitHub](https://github.com/wesleytj)
