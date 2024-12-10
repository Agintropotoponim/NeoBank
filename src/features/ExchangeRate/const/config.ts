export const apiKey = process.env.REACT_APP_EXCHANGE_RATE_API_KEY as string;

export const baseCurrency = 'RUB';

export const currencies = ['USD', 'CNY', 'CHF', 'EUR', 'JPY', 'TRY'];

export let updateIntervaInlMinutes = 15;

export let updateInterval = updateIntervaInlMinutes * 60 * 1000;

const options = { timeZone: 'Europe/Moscow' };
export const moscowDate = new Date().toLocaleDateString('ru-RU', options);