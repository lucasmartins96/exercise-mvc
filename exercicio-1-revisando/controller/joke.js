const { getJokes } = require('../model/joke');

const listJokes = async (req, res) => {
  const joke = await getJokes();

  res.status(200).render('jokeView', { joke });
};

module.exports = {
  listJokes,
};
