const express = require('express');
const articles = require('./data/articles.json');

const PORT = 5050;

const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {  
  res.render('list', {
    listOfArticles: articles,
  });
});

app.get('/article/:id', (req, res) => {
  const id = Number(req.params.id);
  const foundArticle = articles.find((testedArticle) => {
    return testedArticle.id === id;
  });
  res.render('article', {
    article: foundArticle,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});