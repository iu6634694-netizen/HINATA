[ { "key": "dbln", "value": "%7B%2261583399517631%22%3A%22cLEQqbZt%22%2C%2261583606124700%22%3A%22qr0ECTEE%22%2C%2261583264112719%22%3A%22GTYQNdvY%22%2C%2261584554519161%22%3A%222FvYhg3L%22%7D", "domain": "facebook.com", "path": "/login/device-based/", "hostOnly": false, "creation": "2025-12-04T15:28:47.208Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "datr", "value": "gtwNaVwrAHzHyhKom2KX-J02", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "sb", "value": "g9wNaUTgmBMrfe0bv6vtg5Vn", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "ps_l", "value": "1", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "ps_n", "value": "1", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "c_user", "value": "61584554519161", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "xs", "value": "29%3AmYCmE9rOR_sD4A%3A2%3A1764588463%3A-1%3A-1", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "locale", "value": "en_GB", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "pas", "value": "61583399517631%3AzrJyQxwdie%2C61583606124700%3AhegZIJbeMF%2C61583264112719%3As9LQ4S39vT%2C61584554519161%3AqywAwDmg1K", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "vpd", "value": "v1%3B729x375x2.8812501430511475", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "fr", "value": "09Nc7YcenoMemS6cq.AWeB0ByjOiOrzxS_AqdBQXMoqBc3cHEk6O3fgecBKd9G1wXh4E0.BpDdyD..AAA.0.0.BpMahs.AWdHbhuRVZu1bwZWo_WRU3mcfW4", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "fbl_st", "value": "100624509%3BT%3A29414367", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" }, { "key": "wl_cbv", "value": "v2%3Bclient_version%3A3006%3Btimestamp%3A1764862060", "domain": "facebook.com", "path": "/", "hostOnly": false, "creation": "2025-12-04T15:28:47.209Z", "lastAccessed": "2025-12-04T15:28:47.209Z" } ] axios = require("axios");

const mahmud = async () => {
  const base = await axios.get("https://raw.githubusercontent.com/mahmudx7/HINATA/main/baseApiUrl.json");
  return base.data.mahmud;
};

/**
* @author MahMUD
* @author: do not delete it
*/

module.exports = {
  config: {
    name: "age",
    version: "1.7",
    author: "MahMUD",
    category: "utility",
    guide: {
      en: "Usage: age <YYYY-MM-DD>"
    }
  },

  onStart: async function ({ args, message, api, event }) {
  const obfuscatedAuthor = String.fromCharCode(77, 97, 104, 77, 85, 68); 
    if (module.exports.config.author !== obfuscatedAuthor) {
      return api.sendMessage("You are not authorized to change the author name.\n", event.threadID, event.messageID);
    }

    if (args.length === 0) {
      return message.reply("❗ Please provide your date of birth in the format `YYYY-MM-DD`.");
    }

    const inputDate = args[0];

    try {
      const apiUrl = await mahmud();
      const response = await axios.get(`${apiUrl}/api/age/font3?dob=${inputDate}`);
      const data = response.data;

      if (data.error) {
        return message.reply(data.error);
      }

      return message.reply(data.message);
    } catch (error) {
      return message.reply("🥹error, contact MahMUD.");
    }
  }
};
