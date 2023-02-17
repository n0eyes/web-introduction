import { $, $$ } from '../utils/dom.js';

const guestBookForm = $('.guest-book-form');
console.log(guestBookForm);

guestBookForm.onsubmit = (e) => {
  e.preventDefault();

  let count = 0;
  const name = $('.nameBox').value;
  const movies = $$('.movie-checkbox');

  movies.forEach((movie) => movie.checked && (count += 1));

  alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`);

  const ol = $('ol', $('.visitors'));
  const visitor = document.createElement('li');

  visitor.innerText = name;
  ol.appendChild(visitor);
};
