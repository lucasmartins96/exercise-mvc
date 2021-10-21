const axios = require('axios');

const endpoint = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async () => {
  try {
    const res = await axios.get(endpoint);
    return res.data.joke;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getJokes,
};
