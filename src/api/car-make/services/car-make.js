'use strict';

/**
 * car-make service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-make.car-make');
