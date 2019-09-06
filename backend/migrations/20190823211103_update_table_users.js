
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
            table.string('jobTitle', 30).notNull().defaultTo('Sem cargo')
            table.float('wage').notNull().defaultTo(0)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('jobTitle')
        table.dropColumn('wage')
    })
};
