
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', table => {
        table.increments('id').primary()
        table.binary('content').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('post')
};
