
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('post', table => {
        table.timestamp('createdAt')
        table.integer('numberOfLikes').defaultTo(0)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('post', table => {
        table.dropColumn('createdAt')
        table.integer('numberOfLikes')
    })
};
