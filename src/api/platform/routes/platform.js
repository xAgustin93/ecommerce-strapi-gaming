'use strict';

/**
 * platform router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::platform.platform');
