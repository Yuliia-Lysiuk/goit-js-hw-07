import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector(".gallery");
galleryConteiner.insertAdjacentHTML("beforeend", onMakeGallery(galleryItems));

function onMakeGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`).join(" ");
}

 let gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
     });

galleryConteiner.addEventListener("click", onImageGallery)

function onImageGallery(ev) {
    ev.preventDefault();
   
    gallery.open('.gallery');
}