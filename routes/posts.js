// IMPORTO EXPRESS
const express = require("express");
// CREO IL ROUTER
const router = express.Router();
//IMPORTO ARRAY CON POSTS
const postsArray = require("../data/posts.js");
//ESPORTO IL ROUTER
module.exports = router;

// CRUD

// INDEX -> visualizzo tutti i posts
router.get("/", (req, res) => {
  res.json(postsArray);
});
