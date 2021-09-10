let catalogo = [{
        codigo: 1,
        titulo: "Matrix",
        anoDeLancamento: 1999,
        duracao: 2.5,
        emCartaz: false,
        faturamento: 100000000
    },
    {
        codigo: 2,
        titulo: "Harry Potter",
        anoDeLancamento: 2001,
        duracao: 1.5,
        emCartaz: false,
        faturamento: 10000
    },

    {
        codigo: 2,
        titulo: "Velozes e Furiosos",
        anoDeLancamento: 2021,
        duracao: 3.5,
        emCartaz: false,
        faturamento: 0
    }

];

function adicionarFilme(codigo, titulo, anoDeLancamento, duracao, emCartaz) {
    catalogo.push({
        codigo,
        titulo,
        anoDeLancamento,
        duracao,
        emCartaz
    });
}

function buscarFilme(codigo) {
    // Receber como parametro o codigo do filme
    // Buscar no array do catálogo o filme pelo seu código array.find
    // Console.log(filmeEncontrado)
    let filmeEncontrado = catalogo.find(item => item.codigo == codigo);
    console.log(filmeEncontrado);
    return filmeEncontrado;
}

function alterarStatusEmCartaz(codigo) {
    // Receber como parametro o código do filme
    // Encontrar o filme no catálogo pelo código
    // Alterar o status emCartaz para seu inverso (se for true, vira false)
    // Atualizar o array de catalogo com o filme alterado
    let indexFilme = catalogo.findIndex(fm => fm.codigo == codigo);
    if (catalogo[indexFilme].emCartaz === true) {
        catalogo[indexFilme].emCartaz = false;
    } else {
        catalogo[indexFilme].emCartaz = true;
    }
}

function listarTodosFilmes() {
    catalogo.forEach((item, indice, array) => {
        console.log(item, indice);
    });

}

function listarFilmesLongos() {
    let filmesLongos = catalogo.filter((item) => item.duracao > 2);
    listarTodosFilmes(filmesLongos);
    filmesLongos.forEach((item, indice, array) => {
        console.log(item, indice);
    });
}

function listarTodosFilmes2() {
    let filmesResumo = catalogo.map((item) => {
        return {...item,
            resumo: `${item.titulo}, ${item.anoDeLancamento}. Duração: ${item.duracao}`
        }
    });

    filmesResumo.forEach(item => console.log(item.resumo));
};

function buscarFilmePeloCodigo(codigo) {
    let { titulo } = catalogo.find(filme => filme.codigo === codigo);
    console.log(titulo);
}

function calcularFaturamento() {
    //Utilizar o metodo reduce para calcular o total de faturamento dos filmes
    let valorTotal = catalogo.reduce((acumulador, item) => acumulador + item.faturamento, 0);
    console.log(valorTotal);
}

module.exports = {
    adicionarFilme,
    buscarFilme,
    alterarStatusEmCartaz,
    listarTodosFilmes,
    listarFilmesLongos,
    listarTodosFilmes2,
    buscarFilmePeloCodigo,
    calcularFaturamento
};