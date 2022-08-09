"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Ator"] = 2] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["Desenvolvedora"] = 4] = "Desenvolvedora";
    Profissao[Profissao["Jogadora_De_Futebol"] = 5] = "Jogadora_De_Futebol";
    Profissao[Profissao["Jogador_De_Futebol"] = 6] = "Jogador_De_Futebol";
})(Profissao || (Profissao = {}));
const pessoa = {
    nome: 'Eduardo',
    idade: 24,
    profissao: 'desenvolvedor',
};
pessoa.idade = 25;
const pessoa2 = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor',
};
const pessoa3 = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora',
};
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const maria = {
    nome: 'Maria',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: 'Jessica',
    idade: 21,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Cálculo1', 'Cálculo2', 'Programação'],
};
const monica = {
    nome: 'Jessica',
    idade: 21,
    materias: ['Matemática', 'Programação'],
};
function listar(lista) {
    lista.forEach((item) => {
        console.log('- ', item);
    });
}
listar(monica.materias);
