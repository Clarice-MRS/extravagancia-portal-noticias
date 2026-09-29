/************************
    ARRAY DE NOTÍCIAS 
************************/

const noticiasParalelas = [
    {
        id: "1",
        manchete: "O gótico volta às tendências em 2026: como usar preto no verão",
        categoria: "Opinião",
        data: "28 set"
    },

    {
        id: "2",
        manchete: "Lançamento! Perapad 11: O que há de novo? Novas cores...",
        categoria: "Tecnologia",
        data: "13 set"
    },

    {
        id: "3",
        manchete: "Frankenstein avança em sua pesquisa sobre ressurreição; entenda",
        categoria: "Ciência",
        data: "01 set"
    }
]

const ultimasNoticias = [

    {
        imagem: "imgs/fimdasbets.png",
        alt: "Sombra do Presidente Lula e ao fundo a Bandeira do Brasil",
        categoria: "Política",
        manchete: "Fim das bets! Governo Lula anuncia a proibição das casas de apostas no Brasil.",
        autor: "Iris Felina",
        data: "26 set",
        tempo: "13 min"
    },

    {
        imagem: "imgs/studioghibli.jpg",
        alt: "logo padrão do Studio Ghibli e o personagem Totoro em fundo azul",
        categoria: "Opinião",
        manchete: "Studio Ghibli: 10 filmes que mostram por que o estúdio se tornou tão especial",
        autor: "Evelin Santos",
        data: "26 set",
        tempo: "08 min"
    },

    {
        imagem: "imgs/videogame.jpg",
        alt: "Controle de Videogame XBOX",
        categoria: "Tecnologia",
        manchete: "GTA VI: o que esperar do lançamento mais aguardado da Rockstar",
        autor: "Jackson Menezes",
        data: "25 set",
        tempo: "03 min"
    },

    {
        imagem: "imgs/diarioapotecaria.jpg",
        alt: "Poster do anime Diários de uma Apotecária",
        categoria: "Cultura",
        manchete: "Maomao está de volta, lança terceira temporada de 'Diários de uma Apotecária'",
        autor: "Gabriel Carvalho",
        data: "25 set",
        tempo: "10 min"
    },

    {
        imagem: "imgs/gatosilvestre.jpg",
        alt: "Felino silvestre na mata olhando para a câmera",
        categoria: "Ciência",
        manchete: "Nova espécie de felino descoberta, gato-pato do Chile",
        autor: "Eduardo Miranda",
        data: "25 set",
        tempo: "06 min"
    },

    {
        imagem: "imgs/dadosnainternet.jpg",
        alt: "Notebook aberta no colo de uma pessoa com suas mãos sob ele",
        categoria: "Tecnologia",
        manchete: "Pequenos descuidos podem deixar seus dados mais vulneráveis na internet",
        autor: "Monica Geller",
        data: "24 set",
        tempo: "11 min"
    },

    {
        imagem: "imgs/sharething.jpg",
        alt: "crianças gravando um vídeo",
        categoria: "Opinião",
        manchete: "Sharenting: quando compartilhar a infância dos filhos passa dos limites",
        autor: "Nico Canino",
        data: "24 set",
        tempo: "09 min"
    },

    {
        imagem: "imgs/gravidasfgts.jpg",
        alt: "Duas pessoas grávidas com as mãos sob suas barrigas",
        categoria: "Política",
        manchete: "Projeto de Erika Hilton propõe uso do FGTS para reprodução assistida",
        autor: "Alice Miranda",
        data: "24 set",
        tempo: "06 min"
    },

    {
        imagem: "imgs/FeitoPipa.png",
        alt: "Poster do filme Feito Pipa, menino negro olhando para o horizonte",
        categoria: "Cultura",
        manchete: "Feito Pipa será o filme que representará o Brasil no Oscar 2027",
        autor: "Alice Miranda",
        data: "23 set",
        tempo: "05 min"
    },

    {
        imagem: "imgs/vacina.jpg",
        alt: "Pessoa sendo vacinada, foco no braço e na agulha",
        categoria: "Ciência",
        manchete: "Vacinação contra o sarampo é reforçada após novos casos registrados",
        autor: "Mila Felina",
        data: "23 set",
        tempo: "08 min"
    },

    {
        imagem: "imgs/urnaeletronica.png",
        alt: "Urna eletrônica",
        categoria: "Política",
        manchete: "Primeiro voto? O que fazer no dia da votação",
        autor: "Valente Felis",
        data: "22 set",
        tempo: "07 min"
    },
    
    {
        imagem: "imgs/tomhollandluto.png",
        alt: "Foto do ator Tom Holland em preto e branco",
        categoria: "Cultura",
        manchete: "morre o ator Tom Holland, aos 30 anos de idade",
        autor: "Breno Santana",
        data: "21 set",
        tempo: "05 min"
    },
    
    {
        imagem: "imgs/pennydreadful.jpg",
        alt: "Personagens Vanessa e Ethan se abraçando e olhando um para o outro",
        categoria: "Opinião",
        manchete: "Penny Dreadful: a terceira temporada deveria ser melhor?",
        autor: "Clarice Miranda",
        data: "21 set",
        tempo: "04 min"
    },
    
    {
        imagem: "imgs/ia.jpg",
        alt: "lâmpada, em um fundo roxo, com um pequeno adesivo com *IA* escrito nela",
        categoria: "Tecnologia",
        manchete: "Inteligência artificial passa por novos testes e amplia suas possibilidades",
        autor: "Charles Garcia",
        data: "20 set",
        tempo: "03 min"
    },
    
    {
        imagem: "imgs/relampagomcqueen.jpg",
        alt: "Relâmpago Mcqueen",
        categoria: "Ciência",
        manchete: "Relâmpago Mcqueen descobre um novo combústivel.",
        autor: "Matheus Feitosa",
        data: "19 set",
        tempo: "08 min"
    },

    {
        imagem: "imgs/gojonograjau.jpeg",
        alt: "Montagem do personagem Gojo dentro do Terminal Grajaú",
        categoria: "Cultura",
        manchete: "Descubra: Gojo está vivo e morando no Grajaú",
        autor: "Joyce Gomes",
        data: "18 set",
        tempo: "04 min"
    }
]

/********************************
    CONFIGURAÇÃO DOS EVENTOS
********************************/

const botoesFiltro = document.querySelectorAll(".filtrar-noticias button");
const botaoTodas = document.getElementById("filtrar-todas");
const linksCategorias = document.querySelectorAll("nav a");
const campoBusca = document.querySelector(".buscar-noticia input");
const resultadosBusca = document.getElementById("resultados-busca");
const formulario = document.getElementById("form-newsletter");
const mensagem = document.getElementById("mensagem-newsletter");

    /****FILTRAGEM DE NOTÍCIAS****/

document.addEventListener("DOMContentLoaded", function() {

    botoesFiltro.forEach(function(botao) {

        botao.addEventListener("click", function() {
            const resultado = filtrarNoticias(botao.textContent);

            console.log(resultado);

            const cardNot = document.getElementById("grid-UL-noticias");

            cardNot.innerHTML = "";

            criarUltimasNoticias(resultado);
        });

    });


    botaoTodas.addEventListener("click", function() {

        const cardNot = document.getElementById("grid-UL-noticias");

        cardNot.innerHTML = "";

        criarUltimasNoticias(ultimasNoticias);

    });


    linksCategorias.forEach(function(link) {

        link.addEventListener("click", function() {

            const resultado = filtrarNoticias(link.textContent);

            console.log(resultado);

            const cardNot = document.getElementById("grid-UL-noticias");

            cardNot.innerHTML = "";

            criarUltimasNoticias(resultado);

        });

    });

    /****BUSCAR****/

   campoBusca.addEventListener("input", function() {

    const resultado = buscarNoticias(campoBusca.value);

        if (campoBusca.value.length === 0) {
            resultadosBusca.innerHTML = "";
            resultadosBusca.style.display = "none";
            return;
        }

        if (resultado.length === 0) {
            resultadosBusca.innerHTML = `
                <div class="busca-invalida">
                    <p>Sem resultados...</p>
                    <img src="imgs/semresultados.gif" alt="pica-pau balançando a cabeça em negação">
                </div>
            `;

            resultadosBusca.style.display = "block";

        } else {

            resultadosBusca.innerHTML = "";

            for (const noticia of resultado) {

                resultadosBusca.innerHTML += `  
                <aside class="busca-sucedida">

                    <img class="img-noticia" src="${noticia.imagem}" alt="${noticia.alt}">>

                    <span class="categoria${noticia.categoria.toLowerCase()}">
                        ${noticia.categoria}
                    </span>

                    <h2 class="manchete">${noticia.manchete}</h2>

                    <div class="informacoes">
                        <span class="autor">${noticia.autor} •</span>
                        <span class="data">${noticia.data} •</span>
                        <span class="tempo">${noticia.tempo}</span>
                    </div>

                </aside>
                `;
            }

            resultadosBusca.style.display = "block";

        }

    });

    /****MODO ESCURO****/

    const trocaTema = document.getElementById("botao-modo-escuro");

    const ativarModoEscuro = () => {
        document.body.classList.add("modo-escuro");
    };

    const desativarModoEscuro = () => {
        document.body.classList.remove("modo-escuro");
    };

    trocaTema.addEventListener("click", () => {
        if (document.body.classList.contains("modo-escuro")) {
            desativarModoEscuro();
            localStorage.setItem("modo-escuro", "inactive");
            trocaTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i> escuro';
        } else {
            ativarModoEscuro();
            localStorage.setItem("modo-escuro", "active");
            trocaTema.innerHTML = '<i class="bi bi-sun-fill"></i> claro';
        }
    });

    if (localStorage.getItem("modo-escuro") === "active") {
        ativarModoEscuro();
    }

});

/****************************
    CRIAR NOTÍCIAS
****************************/

function criarNoticiasPararelas() {

    for(const noticiaPararela of noticiasParalelas) {

        const cardsPararelo = document.getElementById("grid-not-paralela");
        cardsPararelo.innerHTML += ` 
        <aside class="noticia-info"> 
            <h1 class="id">${noticiaPararela.id}</h1>
            <div class="conteudo-noticia">
                <h2 class="manchete">${noticiaPararela.manchete}</h2>
                <div class="informacoes">
                    <span class="categoria">${noticiaPararela.categoria} •</span>
                    <span class="data">${noticiaPararela.data}</span>
                </div>
            </div> 
        </aside>
    `;
    }    
}

function criarUltimasNoticias(noticias) {

    for(const ultimaNoticia of noticias) {

        const cardNot = document.getElementById("grid-UL-noticias");
        cardNot.innerHTML += ` 
        <aside class="ultima-noticia-info">

            <img class="img-ultima-noticia" src="${ultimaNoticia.imagem}">

            <span class="categoria${ultimaNoticia.categoria.toLowerCase()}">
                ${ultimaNoticia.categoria}
            </span>

            <h2 class="manchete">${ultimaNoticia.manchete}</h2>

            <div class="informacoes">
                <span class="autor">${ultimaNoticia.autor} •</span>
                <span class="data">${ultimaNoticia.data} •</span>
                <span class="tempo">${ultimaNoticia.tempo}</span>
            </div>

        </aside>
    `;
}    
}
          
/****************************
    FILTRAR NOTÍCIAS
****************************/

function filtrarNoticias(categoria) {

    const noticiasFiltradas = [];

    for (const ultimaNoticia of ultimasNoticias) { 
        if (ultimaNoticia.categoria === categoria) {
            noticiasFiltradas.push(ultimaNoticia);   
        }

    }

    return noticiasFiltradas; 
}

/****************************
   BUSCAR NOTÍCIAS
****************************/

function buscarNoticias(termo) { 
    const resultadosEncontrados = []; 

    for (const ultimaNoticia of ultimasNoticias) { 
        if (
            ultimaNoticia.categoria.toLowerCase().includes(termo.toLowerCase()) ||
            ultimaNoticia.manchete.toLowerCase().includes(termo.toLowerCase()) ||
            ultimaNoticia.autor.toLowerCase().includes(termo.toLowerCase())
        ) {
            resultadosEncontrados.push(ultimaNoticia);
        }
    }

    return resultadosEncontrados;
}

/****************************
    NEWSLETTER - MENSAGEM
****************************/

if (formulario && mensagem) {
        
    formulario.addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        mensagem.innerHTML = `
        <div class="mensagem-confirmacao">
            <strong>Assinatura confirmada. Que extravagância!</strong>
            <p>Prepare sua caixa de entrada: as notícias mais interessantes estão a caminho.</p>
            <p>Porque informação básica nunca foi a nossa praia.</p>
            <img src="imgs/aplausos.gif" alt="pica-pau levantando um cartaz escrito *applause*">
        </div>
        `;
        
        formulario.reset();
});
}

/********************
    DATA E HORA 
********************/

function dataHora() {
    
    var dataAoVivo = new Date;

    var dataAgora = document.querySelector(".data-hora");

    var data = dataAoVivo.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

    var hora = dataAoVivo.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    var formato = data + " • " + hora;

    dataAgora.textContent = formato;

}

dataHora();
setInterval(dataHora, 1000);

/*************************
    CHAMANDO FUNÇÕES 
*************************/

criarNoticiasPararelas();

criarUltimasNoticias(ultimasNoticias);
