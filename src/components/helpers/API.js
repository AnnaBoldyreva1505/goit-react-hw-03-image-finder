import axios from 'axios';

const URL = 'https://pixabay.com/api';
const API_KEY = '14239803-1525d40278084147650a3f538';

export const Api = {
  fetchImages(query, page) {
    return axios.get(
      `${URL}}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  },
};