
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {id: 1, species: 'Monstera', typeOf: 'evergreen shrub', origin: 'Central America', humidity: '50% - 60%', temprature: '18 C - 30 C', climate: 'Tropical'  },
        {id: 2, species: 'Gardenia', typeOf: 'evergreen shurb', origin: 'Africa, Asia, Madagascar and Pacific Islands, and Australia.', humidity: 'High', temprature: '15 C - 21 C', climate: 'Tropical'  },
        {id: 3, species: 'Frangipani', typeOf: 'deciduous shrubs', origin: 'Central and South America', humidity: '40% - 50%', temprature: '18 C - 27 C', climate: 'Tropical'  }
      ]);
    });
};
