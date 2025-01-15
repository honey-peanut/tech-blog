import axios from "axios";

export const DBInteraction = async () => {
    const url = 'https://www.test.com';
    const data = 404;

    const res = await axios.post(url, data)

}