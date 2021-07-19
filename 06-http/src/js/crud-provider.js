const urlCRUD = 'https://reqres.in/api/users';

const getUser = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);

  if (!resp.ok) throw Error('No se puede procesar la solicitud');

  const { data } = await resp.json();
  return data;
};

const createUser = async (user) => {
  const resp = await fetch(urlCRUD, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!resp.ok) throw Error('No se puede procesar la solicitud');

  return await resp.json();
};

const updateUser = async (user, id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!resp.ok) throw Error('No se puede procesar la solicitud');

  return await resp.json();
};

const deleteUser = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'DELETE',
  });

  if (!resp.ok) throw Error('No se pudo eliminar');

  return 'Borrado';
};

export { getUser, createUser, updateUser, deleteUser };
