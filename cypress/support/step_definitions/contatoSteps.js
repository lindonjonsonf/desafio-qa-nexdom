import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Cenario 1 — Envio de forms cm sucesso
Given("que estou na página de contato da Nexdom", () => {
  cy.visit("/contato");   // ajuste p caso a rota for diferente
});

When("preencho todos os campos obrigatórios com dados válidos", () => {
  cy.get("#form-field-name").type("João Silva");
  cy.get("#form-field-email").type("joao.silva@teste.com");
  cy.get("#form-field-message").type("Empresa Teste QA");
  cy.get("#form-field-field_67e0483").type("Analista QA");
  cy.get("#form-field-field_5778e7b").type("(47)99999-9999");
  cy.get("#form-field-field_f77a763").type("Gostaria de saber mais sobre os serviços.");
});

When("aceito os termos de uso", () => {
  cy.get("#form-field-field_7651528").check({ force: true });
});

When("clico no botão {string}", (botao) => {
  cy.contains("button", botao).click({ force: true });
});

Then("devo ver a mensagem {string}", (mensagem) => {
  cy.contains(mensagem, { timeout: 10000 }).should("be.visible");
});

// cenário 2 — Validação de obrigatoried
When("clico no botão {string} sem preencher os campos", (botao) => {
  cy.contains("button", botao).click({ force: true });
});

Then("o navegador deve exibir mensagens de obrigatoriedade nos campos", () => {

  // Verificando que os campps estao marcados como required no forms
  cy.get("#form-field-name").should("have.attr", "required");
  cy.get("#form-field-email").should("have.attr", "required");
  cy.get("#form-field-message").should("have.attr", "required");

  // validando que estao invalidos (simulando "Preencha este campo.")
  cy.get("#form-field-name").then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
  });
  cy.get("#form-field-email").then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
  });
  cy.get("#form-field-message").then(($input) => {
    expect($input[0].checkValidity()).to.be.false;
  });
});


/*
Considerações sobre o formulário de contato

1 - Validação de telefone:
   - O campo de telefone possui uma validação muito restritiva, aceitando apenas caracteres numéricos
     e símbolos específicos (0-9 ( ) # & + * - = .).
   - Isso impede o uso de formatações comuns com espaços, como "(47) 99999-9999".
   💡 Sugestão: flexibilizar o pattern para permitir espaços e formatações usuais.

2 - Checkbox "Li e aceito os termos de uso":
   - Atualmente, o formulário é enviado mesmo quando o checkbox não está marcado.
   💡 Sugestão: implementar validação obrigatória para o aceite dos termos antes do envio.

3 - Termos de uso:
   - O texto "Li e aceito os termos de uso" não possui link para a página de Termos de Uso.
   💡 Sugestão: adicionar um link clicável ao lado do checkbox, direcionando o usuário à página
     de Termos de Uso.
     
4 - Mensagem de sucesso:
   - A frase "As suas respostas foram recebidas com sucesso!" aparece de forma muito sutil no final
     do formulário, sem destaque visual.
   💡 Sugestão: melhorar a visibilidade da mensagem (usar cor de destaque, modal de confirmação ou animação)
     para deixar mais claro ao usuário que o envio foi concluído com sucesso.
*/

