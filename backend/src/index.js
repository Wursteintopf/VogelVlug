'use strict';

const { Telegraf } = require('telegraf');

module.exports = {

  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    strapi.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

    process.once('SIGINT', () => strapi.bot.stop('SIGINT'))
    process.once('SIGTERM', () => strapi.bot.stop('SIGTERM'))
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
