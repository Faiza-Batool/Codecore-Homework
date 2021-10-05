
exports.up = function(knex) {
    return knex.schema.createTable("cohorts", table => {
        table.increments("id");
        table.string('title'); //varchar 255 characters
        table.text('content') //text no limit
        table.integer("viewCount");
        table.string("tags");
        table.text("imageUrl");
        table.timestamp("createdAt").defaultTo(knex.fn.now()); //if will print current time 
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable("cohorts"); 
};
