/* eslint-disable no-param-reassign */
import API_ENDPOINT from '../globals/api-endpoint';

class DbRestoSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addNewReview(review) {
    if (review.review) {
      if (!review.name) {
        review.name = 'Anonymous';
      }
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      const responseJson = await response.json();
      return responseJson;
    }
    return null;
  }
}

export default DbRestoSource;
