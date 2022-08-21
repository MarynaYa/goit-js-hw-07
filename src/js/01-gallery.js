import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);


//// Создаем карточку_______________________
function createImageCards(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
return `<div class="gallery__item">
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
//console.log(createImageCards(galleryItems));

////Залить разметку в div class="gallery"_______________
const galleryItemsAll = document.querySelector(`.gallery`);
const cardsMarkup = createImageCards(galleryItems);
galleryItemsAll.insertAdjacentHTML(`beforeend`, cardsMarkup);
let instance = null;

////Делегируем  на div.gallery__________________
galleryItemsAll.addEventListener(`click`, onContainerClick);

function onContainerClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains(`gallery__image`)) { // если элемент на который не содержит класс "gallery__image", то выходим из функции, а если есть то продолжаем выполнять основной код
    return;
}
 const currentImageUrl = event.target.dataset.source;  // доступ к ориг.карточки
 instance = basicLightbox.create(
    `<img class="modal__image" src="${currentImageUrl}" />`
  );
 instance.show();
}
//// Модальное окно_______________
       // ф-ция откр модального окна
function onModalOpen() {
    window.addEventListener(`keydown`, onKeyPress); // вкл слушателя на window 
}
    // ф-ция закр модал окна
function onModalClose() {
    window.addEventListener(`keydown`, onKeyPress); // вкл слушателя на window
}
     // ф-ция собітия
function onKeyPress(event) { 
    const ESC_KEY_CODE = `Escape`;                     // вешаем возможность закр при нажатии ESC
     const isKeyCode = event.code === ESC_KEY_CODE;

    if (isKeyCode) {
        instance.remove(() => onModalClose);
    }
}
