import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const refs = {
  galleryList: document.querySelector('.gallery'),
};

refs.galleryList.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt='${description}'
      />
    </a>
    </li>`
    )
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a');
// lightbox.refresh();
