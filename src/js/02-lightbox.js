import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// находим галлерею
const galleryItemsAll = document.querySelector(`.gallery`);
console.log(galleryItemsAll);
//// Создаем карточку_______________________
function createImageCards(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" />
  </a>`;
}).join(``);
}
////Залить в галлерею_______________
const cardsMarkup = createImageCards(galleryItems);
galleryItemsAll.insertAdjacentHTML(`afterbegin`, cardsMarkup);

// Добавляем путь к подписи и тайминг______________
var lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionData: "alt",
 });
