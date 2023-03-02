'use strict';

/**
 * platform service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::platform.platform');
