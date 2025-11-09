Feature: Formulário de Contato da Nexdom
  Como visitante do site
  Quero preencher e enviar o formulário de contato
  Para entrar em contato com a empresa

  Scenario: Enviar formulário de contato com dados válidos
    Given que estou na página de contato da Nexdom
    When preencho todos os campos obrigatórios com dados válidos
    And aceito os termos de uso
    And clico no botão "Enviar"
    Then devo ver a mensagem "As suas respostas foram recebidas com sucesso!"

  Scenario: Tentar enviar o formulário sem preencher os campos obrigatórios
    Given que estou na página de contato da Nexdom
    When clico no botão "Enviar" sem preencher os campos
    Then o navegador deve exibir mensagens de obrigatoriedade nos campos
