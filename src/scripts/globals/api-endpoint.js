/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  // UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
