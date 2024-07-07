import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'024410cd03e84ce2895710f80632b787'
    }
})