import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Jpkyne3Bw7CE92M9U0PZtF6PyN5wE1BHY4mNBuNBkU0'
    }
});