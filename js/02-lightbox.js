import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// находим галлерею
const galleryItemsAll = document.querySelector(`.gallery`);
console.log(galleryItemsAll);
//// Создаем карточку_______________________
function createImageCards(array) {
    return array
      .map(
        ({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt="${description}" />
  </a>`, 
      )
      .join('');
  }
  
////Залить в галлерею_______________
const cardsMarkup = createImageCards(galleryItems);
galleryItemsAll.insertAdjacentHTML(`afterbegin`, cardsMarkup);

// Добавляем путь к подписи и тайминг______________
const lightbox = new SimpleLightbox('.gallery a', {   // данный код скопиррован с библиотеки
    captionsData: 'alt',
    captionDelay: 250,
  });