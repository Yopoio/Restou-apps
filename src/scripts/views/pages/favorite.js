import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../component/resto-fav';

const Like = {
  async render() {
    return `
      <resto-fav></resto-fav>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.posts');
    const empty = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <img src="./images/Foodies.png">
      <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
