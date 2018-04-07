
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {event_id: 1, name: 'Moon Landing', year: 1969, description: 'Apollo 11 was the spaceflight that landed the first two humans on the Moon. Mission commander Neil Armstrong and pilot Buzz Aldrin, both American, landed the lunar module Eagle on July 20, 1969, at 20:18 UTC', link: 'https://en.wikipedia.org/wiki/Moon_landing'},
        {event_id: 2, name: 'Confederation of Canada', year: 1867, description: 'Canadian Confederation was the process by which the British colonies of Canada, Nova Scotia, and New Brunswick were united into one Dominion of Canada on July 1, 1867', link: 'https://en.wikipedia.org/wiki/Canadian_Confederation'},
        {event_id: 3, name: 'Russo-Japanese War', year: 1904, description: 'The Russo–Japanese War was fought between the Russian Empire and the Empire of Japan over rival imperial ambitions in Manchuria and Korea', link: 'https://en.wikipedia.org/wiki/Russo-Japanese_War'}
      ]);
    });
};
