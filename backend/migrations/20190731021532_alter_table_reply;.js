
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('reply', table => {
        table.timestamp('createdAt')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('reply', table => {
        table.dropColumn('createdAt')
        
    })
};
