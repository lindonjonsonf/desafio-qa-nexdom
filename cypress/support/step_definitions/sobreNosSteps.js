import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial da Nexdom", () => {
  cy.visit("/");
});

When("clico no menu {string}", (menu) => {
  cy.contains(menu, { matchCase: false }).click({ force: true });
});

Then("devo ser redirecionado para a página de Sobre Nós", () => {
  cy.url().should("include", "sobre");
});

Then("devo ver o título {string}", (titulo) => {
  cy.contains(new RegExp(titulo, "i")).should("be.visible");
});

Then("devo ver o texto {string}", (texto) => {
  cy.contains(texto).should("be.visible");
});

// Cenário 2 — Conteúdo institucional
Given("que estou na página de Sobre Nós da Nexdom", () => {
  cy.visit("/sobre-nos");
});

Then("devo ver a seção {string} com informações sobre a empresa", (secao) => {
  cy.contains(new RegExp(secao, "i")).should("be.visible");
  cy.contains(/Agilidade, simplicidade e eficiência/i).should("be.visible");
  cy.contains(/Unimos tecnologia e inovação/i).should("be.visible");
});

Then("devo ver a seção {string} com o texto sobre inovação e qualidade", (secao) => {
  cy.contains(new RegExp(secao, "i")).should("be.visible");
  cy.contains(/inovação e qualidade/i).should("be.visible");
});

Then("devo ver a seção {string} com a visão da empresa", (secao) => {
  cy.contains(new RegExp(secao, "i")).should("be.visible");
  cy.contains(/parceiro de excelência/i).should("be.visible");
});

Then("devo ver a seção {string} listando os principais princípios", (secao) => {
  cy.contains(new RegExp(secao, "i")).should("be.visible");
  cy.contains(/Inovar para evoluir/i).should("be.visible");
  cy.contains(/trabalho em equipe/i).should("be.visible");
  cy.contains(/transparência/i).should("be.visible");
});
