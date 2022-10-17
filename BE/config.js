/**
 * Author Ares DN
 *
 * Website: https://www.iskydn.online
 *
 */

module.exports = {
  USE_SSL: false,
  DEBUG: true,
  CF_SSL: {
    key: "certs/panazic.key",
    cert: "certs/panazic.crt",
  },

  DOMAIN: "https://dbino.trade",
  TITLE_SITE: "Dbino.trade",
  CONTACT: "contact@dbino.trade",

  MAIL_USERNAME: "contact@dbino.trade",
  MAIL_PASSWORD: "Bach2412@",
  MAIL_HOST: "smtpout.secureserver.net",
  MAIL_PORT: 465,
  MAIL_SERVICE: "Godaddy",
  MAIL_LOGO: "https://didi.azureedge.net/logo-email.png",

  IS_PLAY_SPOT: true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

  SO_GIAY_DEM_NGUOC: 30,
  RATE_NHA_THUONG: 95,
  BET_MAX: 1,

  BINANCE_APIKEY:
    "srBGjy1ATl33Lzb5ZmeXneanYnygQw3QRCGNq0zKV9vvPM5O95CjV8aNX9C9HCUZ",
  BINANCE_APISECRET:
    "AVoHbbQcrOuUhdvkhdxyGuTk9FJlTJBgH02LPwA9TcUxxMCTnF8p1WL3ZPWw4C1T",

  // THANH TOÁN PAYPAL
  //PAYPAL_MODE: 'live', //sandbox or live
  //PAYPAL_CLIENT_ID: 'AbubWI5Cc-21tFJnqK7B6cFuSa2es3nqJYY0McPI9EBLiCyDQjJEJ7_vUcZTBNdiHVhfOEWUsTPL0mcf',//'AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p',
  //PAYPAL_CLIENT_SECRET: 'EFX50IOpCcqREF8npYA9iavGBvqeW8W7zZ1wfM_dn147xyelQyGwSa9U-WJrl44BrSmnj7JFNqMcY8fk',//'EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_',

  PAYPAL_MODE: "sandbox", //sandbox or live
  PAYPAL_CLIENT_ID:
    "AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p", //'',
  PAYPAL_CLIENT_SECRET:
    "EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_", //'',
  // KẾT THÚC THANH TOÁN PAYPAL

  DATA_HOST: "localhost",
  DATA_USER: "root",
  DATA_PASS: "643264",
  DATA_DB: "bo",
  DATA_PORT: 3306,

  PORT_TRADE: 2096, // default 443 ssl
  PORT_SYS: 2087,
  PORT_NAP: 2083,
  PORT_NOTIFY: 2053,
  PORT_SERVER: 8888,

  TOKEN_KEY: "AAGPHg_1O65yS3w6ar1hK5ViendjRNa_pYY",
  // panazicbotrade2022pro
  // AAGPHg_1O65yS3w6ar1hK5ViendjRNa_pYY
  PATH_SYS_CONFIG: "stSys",
  PATH_SYS_COMMISSION: "stCommission",
  PATH_SYS_COMMISSION_VIP: "stCommissionVip",

  ABI_USDT_MAINNET: "USDT_BEP20_mainnet",
  ABI_USDT_TESTNNET: "USDT_BEP20_testnet",
};
