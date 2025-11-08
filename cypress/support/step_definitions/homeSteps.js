import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página inicial da Nexdom", () => {
  cy.visit("/");
});

Then("devo ver o texto {string}", (texto) => {
  cy.contains(texto).should("be.visible");
});

Then("devo ver o botão {string}", (textoBotao) => {
  cy.contains("button, a", textoBotao).should("be.visible");
});