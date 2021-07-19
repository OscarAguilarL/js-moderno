const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);

  if (!resp.ok) throw Error('No se puede procesar la solicitud');

  const { data } = await resp.json();
  return data;
};

export { getUsuario };
