const KEY = '42752010-70402d91d951665a6458bc92c';
const BASE_URI = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const LINK = `${BASE_URI}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error while fetching images from pixabay!', error);
      throw error;
    });
}
