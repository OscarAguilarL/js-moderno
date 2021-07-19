const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'nx0x4p3r';
const cloudUrl = 'https://api.cloudinary.com/v1_1/oscaral/upload';

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

// file :: File
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('upload_preset', cloudPreset);
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (err) {
    throw err;
  }
};

export { getJoke, getUsers, uploadImage };
