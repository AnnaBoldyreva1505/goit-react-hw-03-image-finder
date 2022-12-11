const URL = 'https://pixabay.com/api/';
const KEY = '14239803-1525d40278084147650a3f538';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function fetchImages(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}

export default fetchImages;

