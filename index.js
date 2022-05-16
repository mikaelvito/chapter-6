const express = require("express");
const { Article } = require("./models");

// A global variable that doesn't change at all
// Learn more: https://www.youtube.com/shorts/qADaSdE3sqE
const PORT = 3000;

const app = express();

app.use(express.json());

// GET all articles
app.get("/articles", (req, res) => {
  Article.findAll().then((articles) => {
    res.status(200).json(articles);
  });
});

// GET article by ID
app.get("/articles/:id", (req, res) => {
  Article.findOne({
    where: { id: req.params.id },
  }).then((article) => {
    res.status(200).json(article);
  });
});

// POST an article
app.post("/articles", (req, res) => {
  Article.create({
    title: req.body.title,
    body: req.body.body,
    approved: req.body.approved,
  })
    .then((article) => {
      res.status(201).json(article);
    })
    .catch((err) => {
      res.status(422).json("Can't create article");
    });
});

// PUT an article
app.put("/articles/:id", (req, res) => {
  Article.update(
    {
      title: req.body.title,
      body: req.body.body,
      approved: req.body.approved,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Data updated" });
    })
    .catch((err) => {
      res.status(422).json("Can't edit article");
    });
});

// Delete an article
app.delete("/articles/:id", (req, res) => {
  Article.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      // 204 = "no content"
      // It means success but returns nothing
      // Because why do we need to return data if those data are deleted, right?
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(422).json("Can't delete article");
    });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
