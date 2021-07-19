const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

const getJoke = async () => {
  try {
    const resp = await fetch(jokeUrl);
    if (!resp.ok) {
      throw new Error('No se pudo realizar la petición');
    }

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

const getUsers = async () => {
  try {
    const resp = await fetch(urlUsers);

    if (!resp.ok) {
      throw new Error('no se pudo realizar la petición');
    }

    const { data: users } = await resp.json();
    return users;
  } catch (err) {
    throw err;
  }
};

export { getJoke, getUsers };
