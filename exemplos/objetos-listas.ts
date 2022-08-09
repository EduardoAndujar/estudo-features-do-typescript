interface Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao;
}

interface Estudante extends Pessoa {
    materias: string[];
}

enum Profissao {
    Professora,
    Atriz,
    Ator,
    Desenvolvedor,
    Desenvolvedora,
    Jogadora_De_Futebol,
    Jogador_De_Futebol,
}

const pessoa = {
    nome: 'Eduardo',
    idade: 24,
    profissao: 'desenvolvedor',
};

pessoa.idade = 25;

const pessoa2: { nome: string; idade: number; profissao: string } = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor',
};

const pessoa3: { nome: string; idade: number; profissao: string } = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora',
};

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 21,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Cálculo1', 'Cálculo2', 'Programação'],
};

const monica: Estudante = {
    nome: 'Jessica',
    idade: 21,
    materias: ['Matemática', 'Programação'],
};

function listar(lista: string[]) {
    lista.forEach((item) => {
        console.log('- ', item);
    });
}

listar(monica.materias);
