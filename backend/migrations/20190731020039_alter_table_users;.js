
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('createdAt')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('createdAt')
        
    })
};
