const articles = require('../../data/articles.json');

const controller = {

  home: (req, res) => {  
    for (let index = 0; index < articles.length; index++) {
      const text = articles[index].text;
      let words = text.split(' ');
      words = words.slice(0, 30);
      const excerpt = words.join(' ');
      articles[index].excerpt = excerpt;
    }
    res.render('list-avec-bonus', {
      listOfArticles: articles,
    });
  },

  article: (req, res) => {
    const id = Number(req.params.id);
    const foundArticle = articles.find((testedArticle) => {
      return testedArticle.id === id;
    });
    res.render('article', {
      article: foundArticle,
    });
  },

  category: (req, res) => {
    const category = req.params.name;
    const filteredArticles = articles.filter((testedArticle) => {
      return testedArticle.category.toLowerCase() === category; 
    });
    res.render('list-avec-bonus', {
      listOfArticles: filteredArticles
    });
  },

};

module.exports = controller;