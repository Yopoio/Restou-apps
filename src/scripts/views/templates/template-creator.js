import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<article class="post-item">
<img class="post-item-thumbnail lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}">
<div class="post-item-content">
<h2 class="post-item-location">${resto.city}</h2>
  <p class="post-item-date">Rating: ${resto.rating}</p>
  <h1 class="post-item-title"><a href="./#/detail/${resto.id}">${resto.name}</a></h1>
  <p class="post-item-description">${resto.description}</p>
</div>
</article>
`;

const createRestoDetailTemplate = (resto) => `
  <h1 class="title" id="resto-title">
    ${resto.name}
  </h1>
  <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />

  <div class="info">
    <h2>Information</h2>
    <ul>
      <li>
        <h3>Kota</h3>
        <p>${resto.city}</p>
      </li>
      <li>
        <h3>Alamat</h3>
        <p>${resto.address}</p>
      </li>
      <li>
        <h3>Rating</h3>
        <p>${resto.rating}</p>
      </li>
      <li>
        <h3>Foods Menu</h3>
        <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
        </span>
      </li>
      <li>
        <h3>Drinks Menu</h3>
        <span id="drink">
          <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
        </span>
      </li>
    </ul>
  </div>

  <div class="overview">
    <h2>Overview</h2>
    <p>${resto.description}</p>
  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
