const { Article } = require("./models");

Article.update(
  {
    approved: false,
  },
  {
    where: {
      id: 1,
    },
  }
)
  .then(() => {
    console.log("Artikel berhasil diupdate");
    process.exit();
  })
  .catch((err) => {
    console.log("Gagal mengupdate artikel");
  });
