import { uploadImage } from './http-provider';

const body = document.body;
let inputFile, imgFoto;

const createInputFileHtml = () => {
  const html = `
  <h1 class="mt-5">Subir archivos</h1>
  <hr />

  <label>Selecciona una fotografia</label>
  <input type="file" accept="image/png, image/jpg, image/jpeg" />

  <br />
  <img src="" id="foto" class="img-thumbnail" />
  `;

  const div = document.createElement('div');
  div.innerHTML = html;
  body.append(div);

  inputFile = document.querySelector('input');
  imgFoto = document.querySelector('#foto');
};

const events = () => {
  inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    // console.log(file);
    uploadImage(file).then((url) => {
      console.log({ url });
      imgFoto.src = url;
    });
  });
};

export const init = () => {
  createInputFileHtml();
  events();
};
