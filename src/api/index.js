import axios from 'axios';
import { currencyMap } from '../constants'

export const fetchCoinHistory = async (coinType) => {

    try {
        let cached = JSON.parse(localStorage.getItem(currencyMap[coinType]));
        if (cached) {
            let dataUpToDate = cached.slice(-1)[0].timestamp.split('T')[0] === new Date().toISOString().substring(0, 10);
            if (dataUpToDate) {
                return cached
            }
        }

        const history = await axios.get(`/get_currency_data?coinType=${currencyMap[coinType]}`);
        localStorage.setItem(currencyMap[coinType], JSON.stringify(history.data))
        return history.data;

    } catch (err) {
        console.log(err)
    }
}