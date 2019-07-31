
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('createdAt')
        table.binary('profileImage')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('createdAt')
        table.dropColumn('profileImage')
    })
};
