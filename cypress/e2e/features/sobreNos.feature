Feature: Página Sobre Nós da Nexdom
  Como visitante do site
  Quero acessar a página "Sobre Nós"
  Para conhecer a história, missão, valores e propósito da empresa

  Scenario: Acessar a página "Sobre Nós" com sucesso
    Given que estou na página inicial da Nexdom
    When clico no menu "Sobre Nós"
    Then devo ser redirecionado para a página de Sobre Nós
    And devo ver o título "Conheça nossa história"
    And devo ver o texto "Somos a sinergia de anos de evolução em sistemas de gestão integrada"

  Scenario: Verificar o conteúdo institucional da página
    Given que estou na página de Sobre Nós da Nexdom
    Then devo ver a seção "Quem somos" com informações sobre a empresa
    And devo ver a seção "Nossa missão" com o texto sobre inovação e qualidade
    And devo ver a seção "Nosso sonho grande" com a visão da empresa
    And devo ver a seção "Nossos valores" listando os principais princípios