const db = require('./connection')

const getEvents = (testDb) => {
  return (testDb || db)('events')
    .select()
}

const getEventById = (id, testDb) => {
  return (testDb || db)('events')
    .where('events.event_id', id)
}

const insertEvent = (event, testDb) => {
  return (testDb || db)('events').insert(event)
    .then(event_id => getEventById(event_id[0], db))
}

// const deleteCat = (id, testDb) => {
//   return (testDb || db)('cats')
//     .where('id', id)
//     .del()
// }
//
// const editCat = (id, newCat, testDb) => {
//   return (testDb || db)('cats')
//     .where('id', id)
//     .update(newCat)
//     .then(() => getCatById(id, db))
// }

module.exports = {
  getEvents,
  insertEvent
  // deleteCat,
  // editCat
}
