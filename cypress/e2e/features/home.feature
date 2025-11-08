Feature: Página Inicial da Nexdom

  Scenario: Verificar slogan principal e botão "Saiba mais"
    Given que acesso a página inicial da Nexdom
    Then devo ver o texto "Transformamos a gestão de planos de saúde através da tecnologia e inovação!"
    And devo ver o botão "Saiba mais"