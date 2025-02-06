class filmeList {
    constructor () {
        this.filmes = []
    }
    addFilme(filme) {
        this.filmes.push(filme)
    }
    getAllFilmes() {
        return this.filmes
    }
    getFilmeById(id) {
    const filme = this.filmes.find(filme => filme.id == id);
    if (!filme) {
        throw new Error('Filme não encontrado');
    }
    return filme;
    }
    updateFilme(id, filme) {
        const filmes = this.getFilmeById(id);
        Object.assign(filme, updateData);
        return filme;
    }
    deleteFilme(id) {
        this.filmes = this.filmes.filter(filme => filme.id !== id);
    }
    getTotalFilmes() {
        return this.filmes.length;
    }
}

module.exports = filmeList;