
exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', table => {
        table.increments('id').primary()
        table.string('img_name').notNull()
        table.string('img_path').notNull()
        table.string('img_type').notNull()
        table.integer('userId').notNull()
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images')
};
