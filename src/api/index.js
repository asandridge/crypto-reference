import axios from 'axios'
import { currencyMap } from '../constants'

const now = new Date();
const endDate = now.toISOString().substring(0, 10);
let startDate = now;
startDate.setFullYear(now.getFullYear() - 10);
startDate = startDate.toISOString().substring(0, 10);

export const fetchCoinHistory = async (coinType) => {

    const url = `https://api.nomics.com/v1/exchange-rates/history?key=${NOMICS_KEY}&currency=${currencyMap[coinType]}&start=${startDate}T00%3A00%3A00Z&end=${endDate}T00%3A00%3A00Z`;

    try {
        if (localStorage.getItem(currencyMap[coinType])) {
            return JSON.parse(localStorage.getItem(currencyMap[coinType]))
        }
        const history = await axios.get(url);
        localStorage.setItem(currencyMap[coinType], JSON.stringify(history.data))
        return history.data;
    } catch (err) {
        console.log(err)
    }
}