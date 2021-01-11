import axios from 'axios';
import { currencyMap } from '../constants'

export const fetchCoinHistory = async (coinType) => {

    try {
        if (localStorage.getItem(currencyMap[coinType])) {
            return JSON.parse(localStorage.getItem(currencyMap[coinType]))
        }
        const history = await axios.get(`/get_currency_data?coinType=${currencyMap[coinType]}`);
        localStorage.setItem(currencyMap[coinType], JSON.stringify(history.data))
        return history.data;
    } catch (err) {
        console.log(err)
    }
}