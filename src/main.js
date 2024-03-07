import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoadingIndicator,
  hideLoadingIndicator,
  showErrorToast,
} from './js/render-functions.js';

const searchForm = document.querySelector('.search-page');
const searchInput = document.querySelector('.search-placeholder');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    showErrorToast('Please enter a search term');
    return;
  }

  showLoadingIndicator();

  fetchImages(query)
    .then(data => {
      hideLoadingIndicator();
      if (data.hits.length === 0) {
        showErrorToast(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
      hideLoadingIndicator();
      showErrorToast('Error while fetching images from pixabay!');
    });
}
