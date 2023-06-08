import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../component/resto-list';

const Explore = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Explore;
