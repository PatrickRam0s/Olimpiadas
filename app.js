function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se o campoPesquisa for uma string sem nada
    if(!campoPesquisa || campoPesquisa == " ") {

        section.innerHTML = ("<h3><p>Digite algo</p></h3>");
        return;

    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        resultados += `
  <div class="item-resultado">
      <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
          <p class="descricao-meta">${dado.descricao}</p>
              <a href= ${dado.link} target="_blank">Mais informações</a>
  </div>
  `;
    }

 }
    if(!resultados){
       resultados = "<h3><p>Nada foi encontrado</p></h3>";
    }

    // Atribui a string com os resultados HTML à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
      
  }