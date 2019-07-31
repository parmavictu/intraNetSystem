
exports.up = function(knex, Promise) {
    return knex.schema.createTable('likes', table => {
        table.increments('id').primary()
        table.integer('userId').notNull()
        table.integer('postId').notNull()
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('likes')
};
