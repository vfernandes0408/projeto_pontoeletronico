exports.up = function (knex) {
    return knex.schema.createTable('funcionario', function (table) {
        table.incremental();

        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('endereco').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
        table.string('grupo').notNullable();
        table.string('status').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('funcionario')
};