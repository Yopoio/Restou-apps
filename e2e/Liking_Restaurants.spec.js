const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.posts');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Tidak ada favorite restaurant yang ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.seeElement('.post-item-title a');

  const firstRestaurant = locate('.post-item-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const likedRestaurantName = await I.grabTextFrom('.post-item-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see(
    'Tidak ada favorite restaurant yang ditampilkan',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.seeElement('.post-item-title a');

  const firstRestaurant = locate('.post-item-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const likedRestaurantName = await I.grabTextFrom('.post-item-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.post-item-title');

  const firstRestaurantLiked = locate('.post-item-title a').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(
    'Tidak ada favorite restaurant yang ditampilkan',
    '.restaurant-item__not__found',
  );
});
