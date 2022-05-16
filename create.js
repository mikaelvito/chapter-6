const { Article } = require("./models");

Article.create({
  title: "Sebuah judul",
  body: "Body dari artikel",
  approved: true,
}).then((article) => {
  console.log(article);
});
