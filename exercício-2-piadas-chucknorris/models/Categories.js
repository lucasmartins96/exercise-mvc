const axios = require('axios');

const allCategories = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async () => {
  try {
    const { data } = await axios.get(allCategories);
    return data;
  } catch (error) {
    console.log(error);
  }
  return data;
};

const getJokeByCategory = async (category) => {
  const jokeEndpoint = `https://api.chucknorris.io/jokes/random?category=${category}`;
  try {
    const {
      data: { value },
    } = await axios.get(jokeEndpoint);
    return value;
  } catch (error) {
    console.log(error);
  }
  return value;
};

module.exports = {
  getCategories,
  getJokeByCategory,
};
