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

  return await resp.json();
};

export { getUser, createUser };
