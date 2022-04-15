'use strict';

/**
 *  message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const escapeInput = (input) => {
  return input
    .replace('.', '\\.')
    .replace('-', '\\-')
    .replace('#', '\\#')
    .replace('+', '\\+')
    .replace('(', '\\(')
    .replace(')', '\\)')
    .replace('!', '\\!')
    .replace('_', '\\_')
    .replace('*', '\\*')
    .replace('`', '\\`')
    .replace('=', '\\=')
    .replace('{', '\\{')
    .replace('}', '\\}')
    .replace('>', '\\>')
    .replace('|', '\\|')
}

module.exports = createCoreController('api::message.message', ({ strapi }) => ({
  async create(ctx) {
    const { data, meta } = await super.create(ctx);
    const messageText = `*Neue Nachricht über das Kontaktformular*\n\n*Name:* ${escapeInput(data.attributes.name)}\n*Email:* ${escapeInput(data.attributes.email)}\n*Nachricht:* ${escapeInput(data.attributes.message)}`
    strapi.bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, messageText, { parse_mode: 'MarkdownV2' })
    return { data, meta };
  }
}));
