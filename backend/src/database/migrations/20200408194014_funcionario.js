exports.up = function (knex) {
    return knex.schema.createTable('funcionario', function (table) {
        table.increments();

        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('endereco').notNullable();
        table.string('cpf').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
        table.string('grupo').notNullable();
        table.string('status').notNullable();
        table.timestamp('datacriacao').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('funcionario')
};