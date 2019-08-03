
exports.up = function(knex, Promise) {
    return knex.schema.createTable('inventory', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('amount').notNull()
        table.integer('typeId')
        table.date('fab')
        table.date('val')
        table.float('price')
        table.timestamp('createdAt')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('inventory')
};
