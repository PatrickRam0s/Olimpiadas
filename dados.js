let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos de idade, ela já coleciona títulos internacionais e inspira milhões de jovens a seguirem seus sonhos.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "fada skate sk8"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade, a Fada da Ginástica, é uma ginasta brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos de idade, ela já coleciona títulos internacionais e inspira milhões de jovens a seguirem seus sonhos.",
        link: "https://pt.wikipedia.org/wiki.org/Rebeca_Andrade",
        tags: "ginastica fada brasil olimpica"
    },
    {
        titulo: "Gabriel Medina",
        descricao: "Gabriel Medina é um surfista profissional brasileiro, tricampeão mundial da World Surf League. Conhecido por sua habilidade e carisma, ele é um dos maiores titulos do surf mundial.",
        link: "https://pt.wikipedia.org/wiki/Gabriel_Medina",
        tags: "surf brasil tricampeão mundial wsl"
    },
    {
        titulo: "Martine Grael",
        descricao: "Martine Grael é uma velejadora brasileira, medalhista olímpica e mundial. Junto com sua irmã Kahena, conquistou diversos títulos e se tornou um ícone do esporte brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Martine_Grael",
        tags: "vela olimpica medalhista brasil kahena grael irmas grael esporte aquatico"
    },
    {
        titulo: "Bruno Fratus",
        descricao: "Bruno Fratus é um nadador brasileiro, recordista sul-americano e medalhista em diversas competições internacionais. Conhecido por sua velocidade, ele é um dos principais titulos da natação brasileira.",
        link: "https://pt.wiki/Bruno_Fratus",
        tags: "natacao brasil recordista sul-americano velocidade piscina medalhista"
    }
];

// let jogadores = [
//     // Goleiros
//     {
//       titulo: "Alisson Becker",
//       posicao: "Goleiro",
//       clube: "Liverpool",
//       selecao: 91,
//       gols: 0,
//       imagem: "https://exemplo.com/alisson.jpg",
//       numero: 1
//     },
//     {
//       titulo: "Ederson Moraes",
//       posicao: "Goleiro",
//       clube: "Manchester City",
//       selecao: 25,
//       gols: 0,
//       imagem: "https://exemplo.com/ederson.jpg",
//       numero: 31
//     },
  
//     // Zagueiros
//     {
//       titulo: "Thiago Silva",
//       posicao: "Zagueiro",
//       clube: "Chelsea",
//       selecao: 112,
//       gols: 7,
//       imagem: "https://exemplo.com/thiago_silva.jpg",
//       numero: 2
//     },
//     {
//       titulo: "Éder Militão",
//       posicao: "Zagueiro",
//       clube: "Real Madrid",
//       selecao: 30,
//       gols: 1,
//       imagem: "https://exemplo.com/eder_militão.jpg",
//       numero: 4
//     },
  
//     // Laterais
//     {
//       titulo: "Danilo",
//       posicao: "Lateral-direito",
//       clube: "Manchester City",
//       selecao: 49,
//       gols: 2,
//       imagem: "https://exemplo.com/danilo.jpg",
//       numero: 27
//     },
//     {
//       titulo: "Alex Sandro",
//       posicao: "Lateral-esquerdo",
//       clube: "Juventus",
//       selecao: 55,
//       gols: 2,
//       imagem: "https://exemplo.com/alex_sandro.jpg",
//       numero: 12
//     },
  
//     // Volantes
//     {
//       titulo: "Casemiro",
//       posicao: "Volante",
//       clube: "Manchester United",
//       selecao: 65,
//       gols: 5,
//       imagem: "https://exemplo.com/casemiro.jpg",
//       numero: 18
//     },
//     {
//       titulo: "Fabinho",
//       posicao: "Volante",
//       clube: "Liverpool",
//       selecao: 47,
//       gols: 1,
//       imagem: "https://exemplo.com/fabinho.jpg",
//       numero: 3
//     },
  
//     // Meias
//     {
//       titulo: "Lucas Paquetá",
//       posicao: "Meia",
//       clube: "West Ham United",
//       selecao: 39,
//       gols: 7,
//       imagem: "https://exemplo.com/lucas_paqueta.jpg",
//       numero: 11
//     },
//     {
//       titulo: "Rodrygo Goes",
//       posicao: "Meia",
//       clube: "Real Madrid",
//       selecao: 25,
//       gols: 7,
//       imagem: "https://exemplo.com/rodrygo.jpg",
//       numero: 21
//     },
  
//     // Atacantes
//     {
//       titulo: "Neymar Jr.",
//       posicao: "Atacante",
//       clube: "Al-Hilal",
//       selecao: 124,
//       gols: 77,
//       imagem: "https://exemplo.com/neymar.jpg",
//       numero: 10
//     },
//     {
//       titulo: "Vinícius Júnior",
//       posicao: "Atacante",
//       clube: "Real Madrid",
//       selecao: 30,
//       gols: 7,
//       imagem: "https://exemplo.com/vinicius.jpg",
//       numero: 20
//     },
//     {
//       titulo: "Richarlison",
//       posicao: "Atacante",
//       clube: "Tottenham Hotspur",
//       selecao: 42,
//       gols: 19,
//       imagem: "https://exemplo.com/richarlison.jpg",
//       numero: 9
//     },
//     {
//       titulo: "Endrick",
//       posicao: "Atacante",
//       clube: "Palmeiras",
//       selecao: 1,
//       gols: 0,
//       imagem: "https://exemplo.com/endrick.jpg",
//       numero: 99
//     },
//     {
//       titulo: "Raphinha",
//       posicao: "Atacante",
//       clube: "Barcelona",
//       selecao: 24,
//       gols: 5,
//       imagem: "https://exemplo.com/raphinha.jpg",
//       numero: 7
//     },
//     {
//       titulo: "Gabriel Jesus",
//       posicao: "Atacante",
//       clube: "Arsenal",
//       selecao: 57,
//       gols: 19,
//       imagem: "https://exemplo.com/gabriel_jesus.jpg",
//       numero: 9
//     }
//   ];
