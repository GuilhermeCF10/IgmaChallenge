<h1 align="center"> Igma Challenge </h1>

<p align="center">
  <img src="./assets/igma.jpeg">
</p>

<h2 align="center"> Desafio técnico </h2>


<p align="center">
<a href="https://www.linkedin.com/in/guilherme-cagide-fialho/">
  <img src="https://img.shields.io/badge/-@guilherme-2CA5E0?logo=Linkedin&logoColor=white" width="150"/> </a>
<a href="https://github.com/GuilhermeCF10">
  <img src="https://img.shields.io/badge/-GuilhermeCF10-gray?logo=Github&logoColor=white" width="170"/> </a>

---

## Sumário
  - [Proposta](https://github.com/GuilhermeCF10/IgmaChallenge#proposta-)
  - [Endpoints](https://github.com/GuilhermeCF10/IgmaChallenge#endpoints-)
  - [Regras de Validação](https://github.com/GuilhermeCF10/IgmaChallenge#regras-de-validação-)
  - [Requisitos](https://github.com/GuilhermeCF10/IgmaChallenge#requisitos-%EF%B8%8F)
  - [Como rodar o projeto?](https://github.com/GuilhermeCF10/IgmaChallenge#como-rodar-o-projeto-%EF%B8%8F)
  - [Capturas e Documentação](https://github.com/GuilhermeCF10/IgmaChallenge#-capturas-e-documentação-)
  - [O que está funcionando?](https://github.com/GuilhermeCF10/IgmaChallenge#o-que-está-funcionando-)
  - [Tecnologias usadas](https://github.com/GuilhermeCF10/IgmaChallenge#tecnologias-usadas)
  - [Agradecimentos](https://github.com/GuilhermeCF10/IgmaChallenge#agradecimentos)

#
## Proposta 🚧

#### Escrever uma API de cadastro de clientes (Nome, CPF, Nascimento)
  - Importante:
Validar o CPF antes de gravar o cliente no banco de dados

#
## Endpoints 🫡
  - Criar clientes, caso haja um cpf inválido retornar 422
  - Buscar cliente por CPF
  - Listar todos os clientes (usando paginação)

#
## Regras de Validação 👷
- Regra de Validação do CPF
   - Baseada no link: https://www.macoratti.net/alg_cpf.htm#:~:text=O
  
<br />

- Regra básica superficial de data:
  - Data entre 01 e 31
    - Não foram solicitados, portanto não foram aplicados:
      - Exceção de fevereiro
      - Exceção de meses de 30/31
  - Mes entre 01 e 12 
  - Ano limitado entre 0 e 2023

#
## Requisitos 🏗️
Escrever o algoritmo de validação do CPF manualmente
- Não
  - Usar libs prontas para isso
  - Escrever seu proprio código de validação de CPF (Não copiar de outro código fonte)
  - Nos envie um repositório no github com seu código fonte
  - Utilize uma linguagem que possibilite o uso de orientação a objetos como Java, C#, Python, Javascript, etc

#
## Como rodar o projeto? 📽️ 

- Etapa 1: Clonar o projeto
    ```
        git clone https://github.com/GuilhermeCF10/IgmaChallenge
    ```

<br />
  
- Etapa 2: Entrar no projeto e instalar dependencias node
    ```
        yarn install
    ```
<br />

- Etapa 3: Configurando variáveis de ambiente (.env)
  
  - Com o database já criado, sabendo as credenciais para acesso, vamos escolher uma porta para execução do servidor, em caso de dúvidas consultar (.env.example). 
  - 3.1: Nesse exemplo utilizei: 
    ```
    DATABASE_URL=mysql://root:rootroot@localhost:3306/igma
    PORT=8080
    ```

Configuração | nome
:---------|:---------- 
Nome do database    |   igma    
Nome do usuário     |   root    
Senha do usuário    |   rootroot
Porta do servidor   |   8080

  - Importante:
    -  Lembrando que você precisa ter instalado o MySQL
  
<br />

- Etapa 4: Executa o generate, migrate, schema do prisma
  - 4.1: Através de um comando, gerando a estrutura base dentro do banco de dados e fazendo as migrações.
    ```
        yarn database
    ```
  
  - 4.2: Para restaurar o backup feito, basta executar o arquivo SQL localizado na pasta database.
    ```
        mysql -u root -p igma < ./database/igma_backup.sql
    ```
  - BONUS: Você pode olhar também a estrutura em imagem do banco de dados em:
    ```
        ./prisma/schema.png
    ```


<br />

- Etapa 5: Executar projeto. 
  
    ```
      yarn dev
    ```

- Etapa 6 (opcional): Se você utilizar Insomnia, você pode carregar o arquivo de backup do Insomnia. 
  
    ```
    Insomnia > Preferences > Data > Import Data > From File > ./insomnia/Insomnia.json
    ```

- Etapa 7 (opcional): Se você desejar você pode usar o Prisma Studio, onde você consegue visualizar o banco de dados junto aos seus registros
  
    ```
      yarn studio
    ```
    

    



#
## 📷 Capturas e Documentação 📄 

### Base URL

- Check if server is executing

  <img src="./assets/1.Base.png" width="700" style="border-radius: 10px;">

<br/>

### Get All Customers

- Arguments send by GET PARAMS
  - Return customers filtered by pagination arguments
  
  <img src="./assets/2.GetAll.png" width="700" style="border-radius: 10px;">
Pagination argument | Type | Default | Info
:---------|:---------- |:----------  |:----------
take      |  number    |    5        | Get the first X records
skip      |  number    |    0        | Skip X records

<br/>

### Get Customer By CPF
- Arguments send by JSON
  - Return customers filtered by pagination arguments
  
  <img src="./assets/3.Get.png" width="700" style="border-radius: 10px;">
Argument | Type | Formats Accepted
:---------|:----------|:----------
cpf         |   string    |   (999.999.999-00) or (99999999900)

<br/>

### Create new Customer

- Arguments send by JSON
  - Return message in JSON with the status of the request
  
  <img src="./assets/4.Create.png" width="700" style="border-radius: 10px;">
Argument        | Type          | Formats Accepted
:---------      |:----------    |:----------
name            |   string      |   -
birth           |   string      |   dd/mm/YYYY
cpf             |   string      |   (999.999.999-00) or (99999999900)



#
## O que está funcionando? 💻

Funcionalidade | Status
:---------|:----------
Criar clientes, havendo um cpf inválido retornando 422      |  ✅  
Buscar cliente por CPF                                      |  ✅  
Listar todos os clientes (usando paginação)                 |  ✅  

#
## Tecnologias usadas 
 
Nome | Informação 
:---------|:---------
[Typescript](https://www.typescriptlang.org/) | TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
[Prisma](https://www.prisma.io/) | Prisma is a next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB. It provides type-safety.
[Nodejs](https://nodejs.org/en/) | Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
[MySQL](https://www.mysql.com/) | MySQL Cluster enables users to meet the database challenges of next generation web, cloud, and communications services with uncompromising scalability, uptime
[Express](https://expressjs.com/) | APIs. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Performance.


#
## Agradecimentos
 - [João Vitral](https://www.linkedin.com/in/joao-vinicius-vitral/) pela indicação.
 - [Olimpia Pavoni](https://www.linkedin.com/in/olimpia-pavoni-belo-a5711940/) pela oportunidade.
 - [Igma Digital Product](https://www.linkedin.com/company/igma-digital-product/) pela confiança.

#
<p align="center">
<a href="https://github.com/GuilhermeCF10">
  <img src="./assets/GCF.png" width="96" style="border-radius: 20px;">
</a>
<h1 align="center"> Guilherme Cagide Fialho </h1>