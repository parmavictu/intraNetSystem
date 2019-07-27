
exports.up = function(knex, Promise) {
     return knex.schema.createTable('reply', table => {
        table.increments('id').primary()
        table.string('content', 2000).notNull()
        table.integer('userId').notNull()
        table.integer('postId').notNull()
        table.timestamp('createdAt').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reply')
};
