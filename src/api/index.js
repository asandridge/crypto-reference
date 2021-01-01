import axios from 'axios'
import { currencyMap } from '../constants'

const NOMICS_KEY = process.env.REACT_APP_NOMICS_KEY

const now = new Date();
const endDate = now.toISOString().substring(0, 10);
let startDate = now;
startDate.setFullYear(now.getFullYear() - 10);
startDate = startDate.toISOString().substring(0, 10);

export const fetchCoinHistory = async (coinType) => {

    try {
        if (localStorage.getItem(currencyMap[coinType])) {
            return JSON.parse(localStorage.getItem(currencyMap[coinType]))
        }
        const history = await fetch('/get_currency_data', {
            method: "get",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              coinType: currencyMap[coinType]
            })
        });
        console.log(history, typeof(history))
        localStorage.setItem(currencyMap[coinType], JSON.stringify(history.data))
        return history.data;
    } catch (err) {
        console.log(err)
    }
}