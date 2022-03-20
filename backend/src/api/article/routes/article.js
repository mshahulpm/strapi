'use strict';

/**
 * article router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
    config: {
        find: (ctx, next) => {
            console.log(ctx.query);
            next();
        }
    }
});
