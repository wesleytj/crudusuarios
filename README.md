# CRUD de Usuários - Spring Boot + H2 + Front-end  
`Versão: 1.3.0`

Projeto de API REST com Spring Boot integrado a um front-end simples em HTML, CSS e JavaScript para cadastro, gerenciamento e paginação de usuários.

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

com.wesley.crudusuarios  
┣ controller  
┃ ┗ UsuarioController.java  
┣ frontend  
┃ ┣ index.html  
┃ ┣ styles.css  
┃ ┗ script.js  
┣ service  
┃ ┗ UsuarioService.java  
┣ repository  
┃ ┗ UsuarioRepository.java  
┣ model  
┃ ┗ Usuario.java  
┗ CrudusuariosApplication.java  

---

## 📌 Funcionalidades

### Backend (API REST)

- Criar usuário  
- Listar usuários com paginação  
- Buscar usuário por ID  
- Atualizar usuário  
- Excluir usuário  

### Frontend

- Formulário de cadastro  
- Listagem dinâmica de usuários  
- Paginação integrada  
- Edição de usuários  
- Exclusão de usuários  

---

## 🔗 Endpoints

### ➤ Listar usuários (com paginação)

GET  
```http://localhost:8080/usuarios?page=0&limit=10```

Parâmetros:
- `page` → número da página (inicia em 0)  
- `limit` → quantidade de registros por página 

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

- Paginação de dados

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

## 📈 Changelog
### v1.3.0

- Implementação de paginação no back-end

- Integração da paginação no front-end

- Melhoria na listagem de usuários

### v1.2.0

- CRUD completo de usuários

- Integração front-end + API REST

- Validações e tratamento de erros

---

## 📎 Observação

O banco H2 é em memória, portanto os dados são apagados ao reiniciar a aplicação.

---

## 📌 Autor

Desenvolvido por **Wesley Treib Jacques**

* 💼 [LinkedIn](https://www.linkedin.com/in/wesley-jacques/)
* 🧑‍💻 [GitHub](https://github.com/wesleytj)
