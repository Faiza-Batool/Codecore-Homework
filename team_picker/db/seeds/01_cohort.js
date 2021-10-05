// const faker = require("faker")
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      
      return knex('cohorts')
    });
};

