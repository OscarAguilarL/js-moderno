import { getJoke } from './http-provider';

const body = document.body;
let btnOther, oList;

const createJokeHtml = () => {
  const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr />
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
    </ol>`;

  const divJokes = document.createElement('div');
  divJokes.innerHTML = html;

  body.append(divJokes);
};

const events = () => {
  oList = document.querySelector('ol');
  btnOther = document.querySelector('button');

  btnOther.addEventListener('click', async () => {
    btnOther.disabled = true;
    drowJoke(await getJoke());
    btnOther.disabled = false;
  });
};

// {id, value}
const drowJoke = (joke) => {
  const olItem = document.createElement('li');
  olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
  olItem.classList.add('list-group-item');

  oList.append(olItem);
};

export const init = () => {
  createJokeHtml();
  events();
};
