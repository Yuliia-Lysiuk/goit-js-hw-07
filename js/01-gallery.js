import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector(".gallery");
galleryConteiner.insertAdjacentHTML("beforeend", onMakeGallery(galleryItems));

function onMakeGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                 <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                 />
            </a>
        </div>`).join(" ");
}

galleryConteiner.addEventListener("click", onImageGallery)

function onImageGallery(ev) {
    ev.preventDefault();
    const instance = basicLightbox.create(`<img src="${ev.target.dataset.source}" width="800" height="600">`)
    instance.show()

    document.addEventListener("keydown", event => {
    if (event.code === "Escape") {
        instance.close()
    }
});
}

