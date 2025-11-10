/// <reference types="cypress" />

describe("Testes de API - GitHub (CRUD repo + issue)", () => {
  const baseUrl = "https://api.github.com";
  const token = Cypress.env("GITHUB_TOKEN");
  const username = Cypress.env("GITHUB_USER");
  const repoName = `repo-teste-qa-${Date.now()}`; //nome dinamico p evitar conflitos 
  let issueNumber;

  it("Criando um repositório no GitHub", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/user/repos`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: {
        name: repoName,
        description: "Repositório criado via automação Cypress QA",
        private: false,
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("name", repoName);
      expect(res.body.owner.login).to.equal(username);
    });
  });

  it("Consultando o repositório criado", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/repos/${username}/${repoName}`,
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.full_name).to.equal(`${username}/${repoName}`);
    });
  });

  it("Criando uma issue no repositório", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/repos/${username}/${repoName}/issues`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
      body: {
        title: "Issue criada via Cypress",
        body: "Corpo da issue criada automaticamente para testes.",
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("title", "Issue criada via Cypress");
      issueNumber = res.body.number;
    });
  });

  it("Consultando a issue criada", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/repos/${username}/${repoName}/issues/${issueNumber}`,
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.number).to.equal(issueNumber);
      expect(res.body.title).to.contain("Issue criada via Cypress");
    });
  });

  it("Exclui o repositório criado", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/repos/${username}/${repoName}`,
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      expect(res.status).to.equal(204);
    });
  });

  it("Verificando que o repositório foi eliminado", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/repos/${username}/${repoName}`,
      headers: { Authorization: `Bearer ${token}` },
      failOnStatusCode: false, // aguardando not found
    }).then((res) => {
      expect(res.status).to.equal(404);
    });
  });
});
