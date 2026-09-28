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
        categoria: "Política",
        manchete: "Fim das bets! Governo Lula anuncia a proibição das casas de apostas no Brasil.",
        autor: "Iris Felina",
        data: "26 set",
        tempo: "13 min"
    },

    {
        imagem: "imgs/studioghibli.jpg",
        categoria: "Opinião",
        manchete: "Studio Ghibli: 10 filmes que mostram por que o estúdio se tornou tão especial",
        autor: "Evelin Santos",
        data: "26 set",
        tempo: "08 min"
    },

    {
        imagem: "imgs/videogame.jpg",
        categoria: "Tecnologia",
        manchete: "GTA VI: o que esperar do lançamento mais aguardado da Rockstar",
        autor: "Jackson Menezes",
        data: "25 set",
        tempo: "03 min"
    },

    {
        imagem: "imgs/diarioapotecaria.jpg",
        categoria: "Cultura",
        manchete: "Maomao está de volta, lança terceira temporada de 'Diário de uma Apotecária'",
        autor: "Gabriel Carvalho",
        data: "25 set",
        tempo: "10 min"
    },

    {
        imagem: "imgs/gatosilvestre.jpg",
        categoria: "Ciência",
        manchete: "Nova espécie de felino descoberta, gato-pato do Chile",
        autor: "Eduardo Miranda",
        data: "25 set",
        tempo: "06 min"
    },

    {
        imagem: "imgs/dadosnainternet.jpg",
        categoria: "Tecnologia",
        manchete: "Pequenos descuidos podem deixar seus dados mais vulneráveis na internet",
        autor: "Monica Geller",
        data: "24 set",
        tempo: "11 min"
    },

    {
        imagem: "imgs/sharething.jpg",
        categoria: "Opinião",
        manchete: "Sharenting: quando compartilhar a infância dos filhos passa dos limites",
        autor: "Nico Canino",
        data: "24 set",
        tempo: "09 min"
    },

    {
        imagem: "imgs/gravidasfgts.jpg",
        categoria: "Política",
        manchete: "Projeto de Erika Hilton propõe uso do FGTS para reprodução assistida",
        autor: "Alice Miranda",
        data: "24 set",
        tempo: "06 min"
    },

    {
        imagem: "imgs/FeitoPipa.png",
        categoria: "Cultura",
        manchete: "Feito Pipa será o filme que representará o Brasil no Oscar 2027",
        autor: "Alice Miranda",
        data: "23 set",
        tempo: "05 min"
    },

    {
        imagem: "imgs/vacina.jpg",
        categoria: "Ciência",
        manchete: "Vacinação contra o sarampo é reforçada após novos casos registrados",
        autor: "Mila Felina",
        data: "23 set",
        tempo: "08 min"
    },

    {
        imagem: "imgs/urnaeletronica.png",
        categoria: "Política",
        manchete: "Primeiro voto? O que fazer no dia da votação",
        autor: "Valente Felis",
        data: "22 set",
        tempo: "07 min"
    },
    
    {
        imagem: "imgs/tomhollandluto.png",
        categoria: "Cultura",
        manchete: "morre o ator Tom Holland, aos 30 anos de idade",
        autor: "Breno Santana",
        data: "21 set",
        tempo: "05 min"
    },
    
    {
        imagem: "imgs/pennydreadful.jpg",
        categoria: "Opinião",
        manchete: "Penny Dreadful: a terceira temporada deveria ser melhor?",
        autor: "Clarice Miranda",
        data: "21 set",
        tempo: "04 min"
    },
    
    {
        imagem: "imgs/ia.jpg",
        categoria: "Tecnologia",
        manchete: "Inteligência artificial passa por novos testes e amplia suas possibilidades",
        autor: "Charles Garcia",
        data: "20 set",
        tempo: "03 min"
    },
    
    {
        imagem: "imgs/relampagomcqueen.jpg",
        categoria: "Ciência",
        manchete: "Relâmpago Mcqueen descobre um novo combústivel.",
        autor: "Matheus Feitosa",
        data: "19 set",
        tempo: "08 min"
    },

    {
        imagem: "imgs/gojonograjau.jpeg",
        categoria: "Cultura",
        manchete: "Descubra: Gojo está vivo e morando no Grajaú",
        autor: "Joyce Gomes",
        data: "18 set",
        tempo: "04 min"
    }
]

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

/********************************
    CONFIGURAÇÃO DOS EVENTOS
********************************/

const botaoCiencia = document.getElementById("filtrar-ciencia");
const botaoCultura = document.getElementById("filtrar-cultura");
const botaoOpiniao = document.getElementById("filtrar-opiniao");
const botaoPolitica = document.getElementById("filtrar-politica");
const botaoTecnologia = document.getElementById("filtrar-tecnologia");

document.addEventListener("DOMContentLoaded", function() {

    botaoCiencia.addEventListener("click", function() {
        const resultado = filtrarCiencias();

        console.log(resultado);

        const cardNot = document.getElementById("grid-UL-noticias");

        cardNot.innerHTML = "";

        criarUltimasNoticias(resultado);
    });
});

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

const formulario = document.getElementById("form-newsletter");
const mensagem = document.getElementById("mensagem-newsletter");
            
    if (formulario && mensagem) {
            
        formulario.addEventListener("submit", function(event) {
            
            event.preventDefault();
            
            mensagem.innerHTML = `
            <div class="mensagem-confirmacao">
                <strong>Assinatura confirmada. Que extravagância!</strong>
                <p>Prepare sua caixa de entrada: as notícias mais interessantes estão a caminho.</p>
                <p>Porque informação básica nunca foi a nossa praia.</p>
                <img src="imgs/aplausos.gif">
            </div>
            `;
            
            formulario.reset();
    });
}

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


const noticiasCiencia = [];

function filtrarCiencias() {
    for (const ultimaNoticia of ultimasNoticias) { 
        if (ultimaNoticia.categoria === "Ciência") {
            noticiasCiencia.push(ultimaNoticia);   
        }

    }

    return noticiasCiencia; 
}



criarNoticiasPararelas();

criarUltimasNoticias(ultimasNoticias);

dataHora();
setInterval(dataHora, 1000);
