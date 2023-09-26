# Cielo-Angular
Segundo projeto desenvolvido no bootcamp oferecido pela Ada Tech em parceria com a Cielo, utilizando o framework Angular.

A proposta é consumir as informações contidas em um arquivo .json (localizado na raiz da pasta 'mock-api', sob o título 'transactions.json') como se fossem dados de um sistema legado, transformando-as em um serviço/API a ser exposto e consumido por uma aplicação, desenvolvida utilizando o framework Angular, que agregasse valor analítico para o cliente final.

## Instruções para rodar o projeto
Rode um terminal no contexto da pasta "mock-api". Certifique-se de que sua máquina possui o Node ao menos na versão 18.

Para rodar a API localmente, utilize os seguintes comandos:

```bash
  npm install && npm start
```

Ela será disponibilizada na porta 3000. 

Em seguida, rode um terminal dentro da pasta "bootcamp-cielo", e utilize os seguintes comandos para rodar o projeto:

```bash
  npm install && ng serve
```

Como dito anteriormente, a API está rodando na porta 3000, e seu endereço está gravado na variável "apiUrl" dentro de src -> app -> services -> api.service.ts.

