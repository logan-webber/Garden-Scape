
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, species: 'rowValue1', typeOf: '', origin: '', humidity: '', temprature: '', climate: ''  },
        {id: 2, species: 'rowValue2', typeOf: '', origin: '', humidity: '', temprature: '', climate: ''  },
        {id: 3, species: 'rowValue3', typeOf: '', origin: '', humidity: '', temprature: '', climate: ''  }
      ]);
    });
};
