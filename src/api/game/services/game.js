'use strict';

/**
 * game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game.game');
