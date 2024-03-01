const axios = require('axios');
const config = require('../data/config.json');

let storedMemes = [];

const fetchMemes = async () => {
    try {
        const response = await axios.get(config.apiURL);
        storedMemes = response.data.memes;
        //console.log('Memes fetched successfully');
    } catch (error) {
        console.error('Error fetching memes:', error);
    }
};

const getMemes = () => storedMemes;

module.exports = { fetchMemes, getMemes };
