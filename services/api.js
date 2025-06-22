import axios from 'axios';

// Replace with your MockAPI endpoint if using online service
const BASE_URL = 'https://mockapi.io/projects/your-events-endpoint';

export const fetchEvents = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/events`);
    return res.data;
  } catch (err) {
    console.error('API fetch error:', err);
    return [];
  }
};
