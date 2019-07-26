
exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', table => {
        table.increments('id').primary()
        table.string('content', 2000).notNull()
        table.integer('userId')
            
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('post')
};
