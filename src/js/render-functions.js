import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const imageElements = images.map(image => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imgLink = document.createElement('a');
    imgLink.href = image.largeImageURL;
    imgLink.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    imgLink.appendChild(img);
    card.appendChild(imgLink);

    return card;
  });
  const galleryContainer = document.querySelector('.gallery');

  galleryContainer.innerHTML = '';

  imageElements.forEach(imageElement => {
    galleryContainer.appendChild(imageElement);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function showLoadingIndicator() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}
