const { Article } = require("./models");

Article.findAll().then((articles) => {
  console.log(articles);
});

Article.findOne({
  where: {
    id: 1,
  },
}).then((article) => {
  console.log(article);
});
