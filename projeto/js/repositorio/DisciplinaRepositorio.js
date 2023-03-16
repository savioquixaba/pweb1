class DisciplinaRepositorio{
    constructor(){
        this._disciplinas =[];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(disciplina) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina.materia === materia);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPordisciplina(materia) {
        return this._disciplinas.filter(materia => disciplina.materia === materia);
    }
}