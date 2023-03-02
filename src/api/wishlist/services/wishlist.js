'use strict';

/**
 * wishlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wishlist.wishlist');
