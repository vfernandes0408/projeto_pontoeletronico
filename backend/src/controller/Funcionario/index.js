const connection = require('../../database/connection');
const table = 'funcionario';

module.exports = {
    async index(request, response) {

        await connection(table)
            .select()
            .orderBy(['nome'])
            .then(res => res == '' ? response.json({ message: 'Nenhum funcionário encontrado !' }) : response.send(res))
            .catch(err => response(err))
    },

    async create(request, response) {
        const {
            nome,
            sobrenome,
            endereco,
            cpf,
            email,
            cidade,
            uf,
            grupo,
            status
        } = request.body;


        await connection(table)
            .insert({
                nome,
                sobrenome,
                endereco,
                cpf,
                email,
                cidade,
                uf,
                grupo,
                status
            })
            .then(() => response.json({ message: 'Funcionario cadastrado com sucesso !', }))
            .catch(err => response.json((err)))
    },

    async update(request, response) {
        const { id } = request.params;

        const {
            nome,
            sobrenome,
            endereco,
            cpf,
            email,
            cidade,
            uf,
            grupo,
            status
        } = request.body;

        await connection(table)
            .where('id', id)
            .update({
                nome,
                sobrenome,
                endereco,
                cpf,
                email,
                cidade,
                uf,
                grupo,
                status
            })
            .then(res => response.json({ message: 'Funcionario atualizado com sucesso !' }))
            .catch(err => response(err))
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection(table)
            .where('id', id)
            .del()
            .then(res => res == 0 ? response.json({ message: 'Nenhum funcionário excluido !' }) : response.json({ message: 'Funcionario excluído com sucesso !' }))
            .catch(err => response(err))
    },
}