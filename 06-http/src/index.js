import * as CRUD from './js/crud-provider';

// CRUD.getUser(4).then(console.log).catch(console.error);

// CRUD.createUser({
//   name: 'Oscar',
//   job: 'Programador',
// })
//   .then(console.log)
//   .catch(console.error);

CRUD.updateUser(
  {
    name: 'Oscar',
    job: 'Programador',
  },
  1
)
  .then(console.log)
  .catch(console.error);
