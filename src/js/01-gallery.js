import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryItemsAll = document.querySelector(`.gallery`);
// Создаем карточку_______________________
function createImageCards(images) {
    return galleryItems.map(({preview, original, description}) => {
`<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join(``);

}
