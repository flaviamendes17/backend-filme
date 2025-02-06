const Filme = require("../models/filme");
const filmeList = require("../models/filmeList");

const lista = new filmeList();

const filme1 = new Filme ('O Diário da Princesa', 'Comédia', 'Garry Marshall', 2001);

const filme2 = new Filme ('O Diabo Veste Prada', 'Comédia', 'David Frankel', 2006);

const router = {
    addFilme: (req,res) => {
        try {
            const { nome, genero, diretor, ano} = req.body;
            if (!nome || !genero || !diretor || !ano){
                throw new Error("Todos os campos são obrigatórios");
            }
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme", error});
        }
    },

    getAllFilmes: (req, res) => {
        try {
            const filme = lista.getAllFilmes();
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filmes", error});
        }
    },

    getFilmeById: (req, res) => {
        try {
            const id  = req.params.id;
            res.status(200).json(lista.getFilmeById(id));
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar filme", error});
        }
    },

    updateFilme: (req, res) => {
        try {
            res.status(200).json(lista.updateFilme(req.params.id, req.body));
        } catch (error) {
            res.status(400).json({message: "Erro ao atualizar filme", error});
        }
    },

    deleteFilme: (req, res) => {
        try {
            lista.deleteFilme(req.params.id);
            res.status(200).json({message: "Filme deletado com sucesso"});
        } catch (error) {
            res.status(400).json({message: "Erro ao deletar filme", error});
        }
    }
};

module.exports = router;