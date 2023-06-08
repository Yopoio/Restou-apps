import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

import '../component/resto-detail';
import '../component/resto-review';

const Detail = {
  async render() {
    return `
        <resto-detail></resto-detail>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
